const dictionaryItems = [
  {
    id: 1,
    emoji: "😉",
    title: "Winking Face",
    content:
      "A yellow face with a slight smile or open mouth shown winking, usually its left eye. May signal a joke, flirtation, hidden meaning, or general positivity. Tone varies, including playful, affectionate, suggestive, or ironic.",
  },
  {
    id: 2,
    emoji: "😂",
    title: "Face with Tears of Joy",
    content:
      "A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard. Widely used to show something is funny or pleasing. ",
  },

  {
    id: 3,
    emoji: "🙉",
    title: "Hear-No-Evil Monkey",
    content:
      "he hear no evil monkey, called Kikazaru (Japanese for “hear not”), one of the Three Wise Monkeys. Depicted as the brown 🐵 Monkey Face with hands covering its ears.",
  },
];


const truncateArr = dictionaryItems.map(function(contentEmoji){
    return contentEmoji.content.substring(0, 18);
});

console.log(truncateArr);
