window.onchange = () => {
  calculatePrice();
  fill_price();
  totlePrice();
};

window.onload = () => {
  fill_price();
  calculatePrice();
  totlePrice();
};

const calculatePrice = () => {
  let coffeesList = document.getElementsByClassName("coffee_type")[0].children;

  for (let i = 0; i < coffeesList.length; i++) {
    let input = coffeesList[i].getElementsByTagName("input");

    let sum = calInputnodes(input);

    coffeesList[i].getElementsByClassName("price")[0].innerHTML = sum;
  }
};

// abtracted function for calculatePrice function

const calInputnodes = (input) => {
  let sum = 0;
  for (let i = 0; i < input.length - 1; i++) {
    sum += parseInt(input[i].value);
  }
  sum = sum * parseInt(input[3].value);
  return sum;
};

const fill_price = () => {
  let addCoffeeBtn = document.getElementsByClassName("add-btn");
  for (let i = 0; i < addCoffeeBtn.length - 1; i++) {
    addCoffeeBtn[i].onclick = (e) => {
      let parentEle = e.target.parentNode.parentNode;
      let price = parentEle.getElementsByClassName("price")[0].innerText;
      let cups = parentEle.getElementsByClassName("cups")[0].value;

      document.getElementsByClassName("bill")[0].getElementsByClassName("cups")[
        i
      ].innerText = parseInt(cups);
      document
        .getElementsByClassName("bill")[0]
        .getElementsByClassName("coffee_price")[i].innerText = price;
      totlePrice();
    };
  }
};

const totlePrice = () => {
  let data = document
    .getElementsByClassName("bill")[0]
    .getElementsByTagName("td");

  let totle = 0;
  let addPrice = (cups, price) => {
    return cups * price;
  };

  totle += addPrice(parseInt(data[0].innerText), parseInt(data[1].innerText));
  totle += addPrice(parseInt(data[2].innerText), parseInt(data[3].innerText));
  totle += addPrice(parseInt(data[4].innerText), parseInt(data[5].innerText));

  
      document
      .getElementsByClassName("bill")[0]
      .getElementsByClassName("price")[0].innerText = totle;

  let totle_price = document
    .getElementsByClassName("bill")[0]
    .getElementsByClassName("price")[0].innerText;

    if (totle_price < 1) {
        document.getElementsByClassName("bill")[0].getElementsByTagName("button")[0].disabled = true;
        document.getElementsByClassName("bill")[0].getElementsByTagName("button")[0].style.backgroundColor = "gray";
        document.getElementsByClassName("get_bill")[0].classList = " get_bill"
    }
    else{
        document.getElementsByClassName("bill")[0].getElementsByTagName("button")[0].disabled = false;
        document.getElementsByClassName("bill")[0].getElementsByTagName("button")[0].style.backgroundColor = "dodgerblue";
        document.getElementsByClassName("get_bill")[0].classList += " show"
    }
};

 function printBill() {
   let divContents = document.getElementsByClassName("bill")[0].innerHTML;
  var a = window.open("", "", "height=500, width=500");
  a.document.write("<html>");
  a.document.write("<body > ");
  a.document.write(`<style> 

  
  @media print 
{
  * {
        margin: 0;
        padding: 0;
      }

      @page
          {
           size: 4in 6in;
          }
      
      
      html{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      color: #666;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
      
      .header_title {
        height: 80px;
        align-items: center;
        display: flex;
        justify-content: center;
        font-family: system-ui;
        box-shadow: 0px 0px 10px #ddd;
    }
      
      .header_title > h1 {
        color: #4b1f0e;
        text-transform: uppercase;
        text-shadow: 1px 1px 2px #4b1f09;
      }
      
      
      .bill_title {
        font-size: 30px;
        height: 80px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        font-weight: bold;
        color: #444;
        box-shadow: 0px 0px 4px #ddd;
      }
      
      
      .bill_detailes input {
        font-size: 20px;
        color: #444;
        border: none;
        outline: none;
        text-align: left;
      }
      
      
      
      
  .bill_detailes table tr {
        font-size: 22px;
        height: 50px;
        text-align: left;
      }
      
 .add-btn{
     display: none;
            }
      
      .bill_detailes{
        width: 100%;
      }
      
      .bill_title{
          font-size: 30px;
        text-align: center;
      }
      
      .bill_detailes table {
          width: 100%;
        margin: 5% 10%;
      }
      .bill_detailes table th {
        width: 30%;
    }
      
    .bill_detailes{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        color: #666;
        width: 100%;
        height:90%;
        box-shadow: 0px 0px 5px #ddd;
        overflow: hidden;
    }
      
      
    
      
      
    footer{
        height: 20px;
        width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      footer> div{
          font-size: 20px;
          font-family: cursive;
          font-weight: bold;
          color: #4b1f0e;
        }
          
          }
        </style>`);
  a.document.write(divContents);
  a.document.write("<footer><div>Thanks for buy our coffee</div></footer>");
  a.document.write("</body></html>");
  a.document.close();
  a.print();
}
