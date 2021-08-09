// import Dictionary from "../../dictionary/index";
import Dictionary from "@/dictionary/index";

const d = new Dictionary();

d.set("a1", "11111");
d.set("a2", "22222");

console.log(d.hasKey("a1"));
