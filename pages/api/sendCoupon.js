export default function handler(request, response) {

  if (request.method !== "POST") {
    return response.status(400).send({message: "Only POST"})
  }

  const couponCode = request.query.couponCode



  response
    .status(200)
    .json({ processed: true })

}
