export function runOnScrollPosition(position, runFunction) {
    if (document.body.scrollTop > position || document.documentElement.scrollTop > position) {
        runFunction()
      } 
} 