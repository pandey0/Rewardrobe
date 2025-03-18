import qrcode
import base64
from flask import Flask, jsonify, request
from io import BytesIO
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

UPI_ID = "yourname@upi"

@app.route('/generate_upi_qr', methods=['POST'])
def generate_upi_qr():
    # Get data from request
    data = request.json
    amount = data.get('amount')

    # Check if amount is provided
    if not amount:
        return jsonify({"error": "Amount is required"}), 400

    # Generate the UPI URL
    upi_url = f"upi://pay?pa=arpit242002@oksbi&pn=arpitpandey&am={amount}"
    
    # Log to see the UPI URL and amount
    print(f"Generating UPI QR for amount: {amount}, URL: {upi_url}")

    # Create the QR code
    try:
        qr_code = qrcode.make(upi_url)
        print("QR code generated successfully.")
    except Exception as e:
        print(f"Error generating QR code: {e}")
        return jsonify({"error": "Failed to generate QR code"}), 500

    # Convert the QR code to base64
    img_byte_array = BytesIO()
    qr_code.save(img_byte_array)
    img_byte_array.seek(0)
    img_base64 = base64.b64encode(img_byte_array.getvalue()).decode("utf-8")

    # Simulate transaction ID (you would get this from a payment gateway)
    transaction_id = "txn1234567890"

    # Log the generated QR code data
    print("QR Code generated and converted to base64.")

    # Send the base64 string as the response
    return jsonify({
        "success": True,
        "qrCodeUrl": f"data:image/png;base64,{img_base64}",
        "transactionId": transaction_id
    })

if __name__ == '__main__':
    app.run(debug=True)
