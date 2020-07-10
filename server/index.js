require("./server")({
  port: 3000,
  cb: () => {
    console.log(`server is running `);
  },
});
