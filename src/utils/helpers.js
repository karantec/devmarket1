
// Price formatting
export const formatPrice = (price, currency = 'USD', locale = 'en-US') => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };
  
  // Date formatting
  export const formatDate = (date, format = 'full') => {
    const dateObj = new Date(date);
    
    const formats = {
      full: { dateStyle: 'full' },
      long: { dateStyle: 'long' },
      medium: { dateStyle: 'medium' },
      short: { dateStyle: 'short' },
      relative: null // Handled separately
    };
  
    if (format === 'relative') {
      const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
      const diff = dateObj.getTime() - new Date().getTime();
      const days = Math.round(diff / (1000 * 60 * 60 * 24));
  
      if (Math.abs(days) < 1) {
        return 'today';
      } else if (Math.abs(days) === 1) {
        return days === 1 ? 'tomorrow' : 'yesterday';
      } else {
        return rtf.format(days, 'day');
      }
    }
  
    return new Intl.DateTimeFormat('en-US', formats[format]).format(dateObj);
  };
  
  // String utilities
  export const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')        // Replace spaces with -
      .replace(/[^\w-]+/g, '')     // Remove all non-word chars
      .replace(/--+/g, '-')        // Replace multiple - with single -
      .replace(/^-+/, '')          // Trim - from start of text
      .replace(/-+$/, '');         // Trim - from end of text
  };
  
  export const truncateText = (text, maxLength = 100, suffix = '...') => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - suffix.length).trim() + suffix;
  };
  
  // Array and Object utilities
  export const groupBy = (array, key) => {
    return array.reduce((result, item) => {
      const groupKey = typeof key === 'function' ? key(item) : item[key];
      (result[groupKey] = result[groupKey] || []).push(item);
      return result;
    }, {});
  };
  
  export const sortBy = (array, key, order = 'asc') => {
    return [...array].sort((a, b) => {
      const valueA = typeof key === 'function' ? key(a) : a[key];
      const valueB = typeof key === 'function' ? key(b) : b[key];
      
      if (valueA < valueB) return order === 'asc' ? -1 : 1;
      if (valueA > valueB) return order === 'asc' ? 1 : -1;
      return 0;
    });
  };
  
  // Validation utilities
  export const validators = {
    email: (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    },
    password: (password) => {
      // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      return regex.test(password);
    },
    url: (url) => {
      try {
        new URL(url);
        return true;
      } catch {
        return false;
      }
    }
  };
  
  // Cart utilities
  export const calculateCartTotal = (items) => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  export const calculateDiscount = (price, discountPercent) => {
    return price - (price * (discountPercent / 100));
  };
  
  // Local storage utilities
  export const storage = {
    set: (key, value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (error) {
        console.error('Error saving to localStorage:', error);
        return false;
      }
    },
    get: (key, defaultValue = null) => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch (error) {
        console.error('Error reading from localStorage:', error);
        return defaultValue;
      }
    },
    remove: (key) => {
      try {
        localStorage.removeItem(key);
        return true;
      } catch (error) {
        console.error('Error removing from localStorage:', error);
        return false;
      }
    }
  };
  
  // Image utilities
  export const getImagePlaceholder = (width = 400, height = 300) => {
    return `/api/placeholder/${width}/${height}`;
  };
  
  export const getImageDimensions = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve({ width: img.width, height: img.height });
      img.onerror = reject;
      img.src = url;
    });
  };
  
  // Search and filter utilities
  export const searchProducts = (products, query) => {
    const searchTerm = query.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.categories.some(category => 
        category.toLowerCase().includes(searchTerm)
      )
    );
  };
  
  export const filterProducts = (products, filters) => {
    return products.filter(product => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true; // Skip if filter value is empty
        
        switch (key) {
          case 'price':
            return product.price >= value.min && product.price <= value.max;
          case 'category':
            return product.categories.includes(value);
          case 'rating':
            return product.rating >= value;
          default:
            return product[key] === value;
        }
      });
    });
  };
  
  // Error handling
  export const errorHandler = (error) => {
    // Log error to monitoring service
    console.error('Error:', error);
  
    if (error.response) {
      // Server responded with error
      return {
        type: 'API_ERROR',
        message: error.response.data.message || 'Server error occurred',
        status: error.response.status
      };
    } else if (error.request) {
      // Request made but no response
      return {
        type: 'NETWORK_ERROR',
        message: 'Unable to connect to server',
        status: null
      };
    } else {
      // Other errors
      return {
        type: 'CLIENT_ERROR',
        message: error.message || 'An unexpected error occurred',
        status: null
      };
    }
  };
  
  // Form utilities
  export const serializeForm = (formElement) => {
    const formData = new FormData(formElement);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
      if (data[key]) {
        if (!Array.isArray(data[key])) {
          data[key] = [data[key]];
        }
        data[key].push(value);
      } else {
        data[key] = value;
      }
    }
    
    return data;
  };
  
  export const debounce = (func, wait = 300) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };
  
  export const throttle = (func, limit = 300) => {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };
