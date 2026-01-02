import * as axios from "axios";

describe("http client", () => {
  it("should be supported by axios", async () => {
    // nh jadi ketika kita menggunakan ini sebenernya kita itu suadh emnggunakan default valuenya
    // jadi kalo kita mau ubah makakita bisa cari di sini
    // https://axios-http.com/docs/req_config
    // const httpClient = axios.create();

    const httpClient = axios.create({
      // jadi ketika saya melakukan http request, maka default base urlnya adlah ini
      //   nah ini tuh http endpoint yang gratis
      baseURL: "https://enbcvv013n034.x.pipedream.net/",
      // jadi kalo kita melakukan request maka di tunggu resposenya itu selama 5 detik
      timeout: 5000,
    });

    // disini kita coba cek untuk emndapatkan nge get ke httpClient

    const response = httpClient.get("/");
    expect(response.status).toBe(200);

    expect(httpClient).toBeDefined();
  });

  it("http get method", async () => {
    const httpClient = axios.create({
      // jadi ketika saya melakukan http request, maka default base urlnya adlah ini
      //   nah ini tuh http endpoint yang gratis
      baseURL: "https://enbcvv013n034.x.pipedream.net/",
      // jadi kalo kita melakukan request maka di tunggu resposenya itu selama 5 detik
      timeout: 5000,
    });

    // disini kita coba cek untuk emndapatkan nge get ke httpClient

    const response = httpClient.get("/");
    expect(response.status).toBe(200);
  });
});

// Saat kita membuat object Axios, kita bisa menggunakan default Request Config
// Default Request Config adalah konfigurasi default yang akan digunakan ketika
// membuat HTTP Request
// https://axios-http.com/docs/req_config
