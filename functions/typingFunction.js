async function typeLorem() {

    var i = 0
    var j = 0

    console.log('RUNNING LOOOOP')

    function doTimeout() {
        setTimeout(() => {
        }, 2000);
    }
    
    const titleText = "Yes, I'm Lucas."
    const contentText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores obcaecati laboriosam veniam quas ratione tempore quidem, dicta eveniet, ipsam eum sunt. Perferendis totam ipsam incidunt dolore, voluptatibus porro earum labore quasi? Quae minima debitis eaque dicta. Possimus nihil iusto iure dignissimos hic nesciunt at, eum numquam molestias tenetur, beatae quidem vero maxime nemo fugiat accusantium vitae libero! Aspernatur fuga provident qui. Suscipit, tempore consequatur. Aliquam inventore id magni. Explicabo repellendus delectus natus esse quas labore veritatis repudiandae, cum fugiat ipsa odit minus, maiores laborum molestias. Doloribus, in dicta illum inventore ducimus blanditiis adipisci temporibus odio minus. Recusandae assumenda pariatur delectus!'
  
    function loop() {
        if (i <= titleText.length - 1) {
        
            
            console.log(`char ${titleText.charAt(i)} PRINTED`)
            document.querySelector('.typing-title').innerHTML += titleText.charAt(i)
            i++
            
            setTimeout(() => {loop()}, 200);
    
        } else {
            if (j <= contentText.length - 1) {
                document.querySelector('.text-content').innerHTML += contentText.substring(j, j + 30)
                j += 30

                setTimeout(() => {loop()}, 100);
            }
        }

        
        
    }

    loop()
    
  }
  
  let hasScrollBeforeText = false
  
export function execTyping() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      if (!hasScrollBeforeText) {
        typeLorem()
        hasScrollBeforeText = true
      }
    } 
  }



 