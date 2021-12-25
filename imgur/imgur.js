async function productData(){
    let res = await fetch('https://fakestoreapi.com/products')
    let data = await res.json()
    
    Add(data)
  }
  
  productData()
  
  async function Add(data){
      const datadiv = document.getElementById("data")
      data.forEach(e => {
          let div = document.createElement("div")
          div.id="datadiv"
          let h3 = document.createElement("h3")
          h3.innerText = e.title
          
          let img = document.createElement("img")
          img.src=e.image
         
          div.append(img,h3)
          datadiv.append(div)
      });
  }
  
  async function productsinfo(){
      let name = document.getElementById("text").value
  
      let res = await fetch(`https://fakestoreapi.com/products/${name}`)
      let data = await res.json()
      return data
  }
  
  
  async function display(){
      const datadiv = document.getElementById("data")
      let name = document.getElementById("text").value
      datadiv.innerHTML = ""
      let products = await productsinfo()
      if(name.length==0){
          products.forEach(e => {
              let div = document.createElement("div")
              div.id="datadiv"
              let h3 = document.createElement("h3")
              h3.innerText = e.title
              
              let img = document.createElement("img")
              img.src=e.image
             
              div.append(img,h3)
              datadiv.append(div)
          });
      }
     
      if(products){
          let div = document.createElement("div")
          div.id="datadiv"
          let h3 = document.createElement("h3")
          h3.innerText = products.title
          
          let img = document.createElement("img")
          img.src=products.image
         
          div.append(img,h3)
          datadiv.append(div)
      }
  }
  
  
  function debounce(func, delay){
      setTimeout(() => {
          func()
      }, delay);
  }
  
  