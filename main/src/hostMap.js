const map = {
    "//localhost:3001/": "//wujie-micro.github.io/demo-react17/",
    "//localhost:3002/": "//wujie-micro.github.io/demo-vue2/",
  };
  
  export default function hostMap(host) {
    if (process.env.NODE_ENV === "production") return map[host];
    return host;
  }