import "./pizza.css";

function Pizza({ url }) {
  return (
    <div>
      <div id={"big-div"}>
        <div id={"pizzadiv"}>
          <div id={"imgdiv"}>
            <img alt={"pizza_pic"} src={url}></img>
          </div>

          <div id={"contentdiv"}>
            <h3>Peperoni pizza</h3>
            <p>
              Premium Peperoni and cheese is made with real mozarella on
              original hand-tossed crust.
            </p>
            <p id={"bolding"}>
              <pre> 265 cal     P/F/C:12/10/31    53.8 C</pre>
              </p>

            <div id={"orderdiv"}>
              <h2>$23.90 </h2> <button>ORDER</button>{" "}
            </div>
          </div>
        </div>






        <div id={"pizzadiv"}>
          <div id={"imgdiv"}>
            <img alt={"pizza_pic"} src={"https://i.pinimg.com/originals/0f/8d/4c/0f8d4c7b43e66a993d2fd807fa9b722c.jpg"}></img>
          </div>

          <div id={"contentdiv"}>
            <h3>Strawberry Cake</h3>
            <p>
             Three layer Strawberry desert is not only beautifull looking, but also delicious! perfect dessert for spring and summer.
            </p>
            <p id={"bolding"}>
              <pre> 265 cal     P/F/C:12/10/31    53.8 C</pre>
              </p>

            <div id={"orderdiv"}>
              <h2>$17.90 </h2> <button>ORDER</button>{" "}
            </div>
          </div>
        </div>







        <div id={"pizzadiv"}>
          <div id={"imgdiv"}>
            <img alt={"pizza_pic"} src={"https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011s.jpg"}></img>
          </div>

          <div id={"contentdiv"}>
            <h3>Tortellini</h3>
            <p>
              Premium Peperoni and cheese is made with real mozarella on
              original hand-tossed crust.
            </p>
            <p id={"bolding"}>
              <pre> 265 cal     P/F/C:12/10/31    53.8 C</pre>
              </p>

            <div id={"orderdiv"}>
              <h2>$13.90 </h2> <button>ORDER</button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Pizza };
