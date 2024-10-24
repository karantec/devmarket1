// utils/searchUtils.js
export const searchProducts = (products, searchTerm, category = 'All') => {
    if (!searchTerm) return [];
  
    const normalizedTerm = searchTerm.toLowerCase().trim();
    
    return products.filter(product => {
      // Only apply category filter if not "All"
      if (category !== 'All' && product.category !== category) {
        return false;
      }
  
      // Search through multiple fields
      const searchFields = [
        product.title,
        product.description,
        product.category,
        product.tags?.join(' ') || ''
      ].map(field => (field || '').toLowerCase());
  
      // Check if any field contains the search term
      return searchFields.some(field => field.includes(normalizedTerm));
    });
  };
  
  // Highlight matching text in search results
  export const highlightMatch = (text, searchTerm) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, i) => 
      regex.test(part) ? 
        <mark key={i} className="bg-yellow-200 dark:bg-yellow-800">{part}</mark> : 
        part
    );
  };
  
  // Sort search results by relevance
  export const sortByRelevance = (results, searchTerm) => {
    return [...results].sort((a, b) => {
      // Exact matches get highest priority
      const aExact = a.title.toLowerCase() === searchTerm.toLowerCase();
      const bExact = b.title.toLowerCase() === searchTerm.toLowerCase();
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;
  
      // Then sort by whether the term appears at the start
      const aStarts = a.title.toLowerCase().startsWith(searchTerm.toLowerCase());
      const bStarts = b.title.toLowerCase().startsWith(searchTerm.toLowerCase());
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
  
      // Finally sort by rating/popularity
      return (b.rating || 0) - (a.rating || 0);
    });
  };