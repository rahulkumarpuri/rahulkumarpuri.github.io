function updateFloatingBar() {

    const value =
        document.getElementById(
            "shortExcessResult"
        ).innerText;

    document.getElementById(
        "floatingShort"
    ).innerText = value;
}

setInterval(
    updateFloatingBar,
    300
);



document
.getElementById(
    "downloadReceiptBtn"
)
.onclick = generateReceipt;



function row(
    label,
    value
){
    return `
        <div class="receipt-row">
            <span>${label}</span>
            <strong>${value}</strong>
        </div>
    `;
}


function generateReceipt(){

    let html = "";


    html += `
    <div class="receipt-section">

    <div class="receipt-title">
        Collection
    </div>

    ${row(
        "Total Deposit",
        "₹ "+
        document.getElementById(
            "depositTotal"
        ).innerText
    )}

    ${row(
        "Total Card",
        "₹ "+
        document.getElementById(
            "cardTotal"
        ).innerText
    )}

    ${row(
        "Net Balance",
        "₹ "+
        document.getElementById(
            "netBalanceTotal"
        ).innerText
    )}

    </div>
    `;


    html += `
    <div class="receipt-section">

    <div class="receipt-title">
        Fuel Sale
    </div>

    ${row(
        "Petrol",
        "₹ "+
        document.getElementById(
            "petrolAmount"
        ).innerText
    )}

    ${row(
        "Diesel 1",
        "₹ "+
        document.getElementById(
            "diesel1Amount"
        ).innerText
    )}

    ${row(
        "Diesel 2",
        "₹ "+
        document.getElementById(
            "diesel2Amount"
        ).innerText
    )}

    ${row(
        "Total Sale",
        "₹ "+
        document.getElementById(
            "totalSale"
        ).innerText
    )}

    </div>
    `;


    html += `
    <div class="receipt-section">

    <div class="receipt-title">
        Final Result
    </div>

    ${row(
        "Collection",
        "₹ "+
        document.getElementById(
            "collectionAmount"
        ).innerText
    )}

    ${row(
        "Short / Excess",
        document.getElementById(
            "shortExcessResult"
        ).innerText
    )}

    </div>
    `;


    document.getElementById(
        "receiptContent"
    ).innerHTML = html;


    html2canvas(
        document.querySelector(
            ".receipt-card"
        ),
        {
            scale:3
        }
    ).then(canvas=>{

        const link =
            document.createElement("a");

        link.download =
            "Fuel-Receipt.png";

        link.href =
            canvas.toDataURL(
                "image/png"
            );

        link.click();

    });

}
