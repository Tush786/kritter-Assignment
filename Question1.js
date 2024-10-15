function normalizeString(input) {
 
    input = input.trim();
  

    input = input.replace(/[^a-zA-Z0-9\s]/g, "");
  
  
    input = input.replace(/\s+/g, " ");
  
  
    const words = input.split(" ");
    const camelCaseString = words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  
    return camelCaseString;
  }
  
  // Test case
  const input = " Hello! World@ This is a Test!. ";
  const normalized = normalizeString(input);
  
  console.log(normalized); 
  