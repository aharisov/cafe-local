// find all products in page
const products = document.querySelectorAll('.product-item');

// ceate data for chart
const getProductData = (chart) => {
    // create empty array for storing products names
    let productList = [];

    // create empty array for storing products quantities
    let productQuantities = [];

    products.forEach(product => {
        // add each product's name to array
        productList.push(product.children.item(0).innerHTML);

        // add each product's quantity to array
        productQuantities.push(parseInt(product.getAttribute('data-quan')));
    })

    // prepare data for the chart
    const data = {
        labels: productList,
        datasets: [{
            label: "D'achats",
            data: productQuantities,
            borderWidth: 1
        }]
    }

    //console.log(productQuantities);

    return data;
}

// create chart
const myChart = document.getElementById('chart');

let chart = new Chart(myChart, {
    type: 'bar',
    data: getProductData(),
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Quantité'
                    },  
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
});

// buy product and change it's quantity
const buyProduct = () => {
    // go through product list
    products.forEach(product => {
        // find buy btn
        const buyBtn = product.children.item(2);
        // get initial product quantity
        let counter = product.getAttribute('data-quan');

        // change product quantity by click on buy btn
        buyBtn.addEventListener('click', () => {
            product.setAttribute('data-quan', ++counter);

            // update data and chart
            chart.data = getProductData();
            chart.update();
        })

        //console.log(buyBtn);
    })
}

buyProduct();