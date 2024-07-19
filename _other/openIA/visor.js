const { OpenAI } = require("openai");
const fs = require("fs");

const generatorAI = async (prompt) => {
  const openai = new OpenAI({
    apiKey: "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",
  });

  const completion = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text", text: `
         genera el codigo html y css necesario que se muestra en la imagen, solo debes resoponder con el codigo en un solo archivo.
          ` },
          {
            type: "image_url",
            image_url: {
              "url": "https://res.cloudinary.com/dz9smi3nc/image/upload/v1713956951/Portafolio/Frame_37653_i1kdz1.png",
            },
          },
        ],
      },
    ],
  });


  const htmlCode = completion.choices[0].message.content;
  fs.writeFile("output.html", htmlCode, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File saved successfully!");
  });

};

generatorAI("hello")
