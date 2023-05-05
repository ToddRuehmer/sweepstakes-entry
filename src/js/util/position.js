
const position = (function() {
 
    const center = (containerSize, itemSize) => {
        return parseInt((containerSize / 2) - (itemSize / 2)) 
    }

    const quarterDown = (containerSize, itemSize) => {
      if(itemSize > containerSize / 4) {
        return 20;
      }
      return parseInt((containerSize / 4) - itemSize) 
    }

    return {
      center: center,
      quarterDown: quarterDown
    };
  }());
  export default position;