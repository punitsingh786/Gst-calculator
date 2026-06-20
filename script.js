function calculateGST() {

    let amount = parseFloat(
        document.getElementById("amount").value
    );

    let gstRate = parseFloat(
        document.getElementById("gstRate").value
    );

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    let gstAmount = (amount * gstRate) / 100;

    let totalAmount = amount + gstAmount;

    document.getElementById("original").innerText =
        amount.toFixed(2);

    document.getElementById("gstAmount").innerText =
        gstAmount.toFixed(2);

    document.getElementById("totalAmount").innerText =
        totalAmount.toFixed(2);
}