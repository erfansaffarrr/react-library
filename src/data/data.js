let books = [
  {
    name: "معماری کامپیوتر",
    price: 370000,
    author: "دکتر قدرت سپیدنام",
    description: "کتاب ارشد مجموعه مهندسی کامپیوتر",
    img: "https://www.gisoom.com/book/11142419/front/000/%DA%A9%D8%AA%D8%A7%D8%A8-%D9%85%D8%B9%D9%85%D8%A7%D8%B1%DB%8C-%D8%B3%DB%8C%D8%B3%D8%AA%D9%85-%D9%87%D8%A7%DB%8C-%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1%DB%8C.jpg?size=290x&t=",
    id: "01",
  },
  {
    name: "اصول و مفاهیم پایه کامپیوتر",
    price: 150000,
    author: "محمد سعید احسانی, ناصر نعمت بخش",
    description: "این کتاب توسط جهاد دانشگاهی واحد اصفهان به نشر رسیده",
    img: "https://cdn.fidibo.com/phoenixpub/content/b6197ab4-8c74-4338-9e36-831e39978642/30d170dc-eb39-41f0-a326-8cd9dd582460.jpg?width=192",
    id: "02",
  },
  {
    name: "آموزش گام به گام اکسل 2019",
    price: 250000,
    author: "سپیده ذاکری, مهدی کوهستانی",
    description:
      "این کتاب توسط موسسه فرهنگی همری دیباگران تهران به فروش می رسد",
    img: "https://img.ketabrah.ir/img/l/9184414174175442.jpg",
    id: "03",
  },
  {
    name: "هوش تجاری",
    price: 310000,
    author: "حسین مهاجری, محمدجعفر تارخ",
    description: "این کتاب توسط دانشگاه صنعتی خواجه نصیرالدین طوسی نشر شده",
    img: "https://www.gisoom.com/book/1761265/front/000/%DA%A9%D8%AA%D8%A7%D8%A8-%D9%87%D9%88%D8%B4-%D8%AA%D8%AC%D8%A7%D8%B1%DB%8C-%D8%B1%D9%88%DB%8C%DA%A9%D8%B1%D8%AF%DB%8C-%D9%85%D8%AF%DB%8C%D8%B1%DB%8C%D8%AA%DB%8C.jpg?size=290x&t=",
    id: "04",
  },
  {
    name: "مبانی کامپیوتر و الگوریتم ها",
    price: 125000,
    author: "دکتر انیس کریم پور",
    description: "نشر علوم رایانه",
    img: "https://img.ketabrah.ir/img/l/4366977807775286.jpg",
    id: "05",
  },
  {
    name: "کتاب کامپایلر گسترش علوم پایه",
    price: 85000,
    author: "وحید رافع",
    description: "نشر گسترش علوم پایه",
    img: "https://www.ketabane.org/images/202308/30951-1F6699A1-595C-43EC-A673-6687FDD8AB79.jpg_230_0_80.webp",
    id: "06",
  },
  {
    name: "مدار منطقی گسترش علوم پایه",
    price: 555000,
    author: "حمیدرضا مقسمی",
    description: "نشر گسترش علوم پایه ",
    img: "https://www.ketabane.org/images/202308/67551-4831E9F8-A8CB-4726-B676-B89BE5F43ED5.jpg_230_0_80.webp",
    id: "07",
  },
  {
    name: "کتاب گرافیک رایانه ای جلد 2 دونالد هیرن ",
    price: 155000,
    author: "بهروز قلیزاده",
    description: "نشر دانشگاه صنعتی شریف ",
    img: "https://www.ketabane.org/images/202308/21884-38628388-1DDC-4ACB-8904-102D2C5A0337.jpg_230_0_80.webp",
    id: "08",
  },
  {
    name: "کتاب زبان عمومی ارشد",
    price: 133000,
    author: "مهرداد جوانزاده",
    description: "نشر مدرسان شریف",
    img: "https://store.modaresanesharif.ac.ir/images/thumbs/0006577_-.jpeg",
    id: "09",
  },
];
export const getBooks = () => {
  return books;
};
export const getBook = (id) => {
  return books.find((book) => book.id == id);
};

export const deletebook = (id) =>{
    books = books.filter ((book)=>{
     return    book.id !== id
    });
}