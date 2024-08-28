export async function GET(request) {
  const amount = request.nextUrl.searchParams.get("amount") || null;
  const rate = process.env.VAT_RATE;
  let vat = null;
  if (amount !== null) {
    vat = (amount * rate).toFixed(2);
  }
  return Response.json({ rate: rate, amount: amount, vat: vat });
}

export async function POST(request) {
  const data = await request.json();
  const amount = data["amount"]
  const rate = process.env.VAT_RATE;
  let vat = null;
  if (amount !== null) {
    vat = (amount * rate).toFixed(2);
  }
  return Response.json({ rate: rate, amount: amount, vat: vat });
}
