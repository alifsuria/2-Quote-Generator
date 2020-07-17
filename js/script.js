$(document).ready(function() {
  $(".button-trigger").on("click", function() {
    const QUOTE = [
      {
        text:
          "If nobody cares to accept you and wants you in this world, accept yourself and you will see that you don’t need them and their selfish ideas.",
        author: "Alibaba Saluja"
      },
      {
        text: "Life is not a game of luck. If you wanna win, work hard.",
        author: "Sora"
      },
      {
        text: "If your life can change once, your life can change again.",
        author: "Sanae"
      },
      {
        text:
          "It’s more important to master the cards you’re holding than to complain about the ones your opponent was dealt.",
        author: "Grimsley"
      },
      {
        text:
          "I too will obtain everything that I desire. Not because someone asked me to do it, but because I know in my heart that I have something worth fighting for.",
        author: "Julis Alexia Van Riessfeld"
      },
      {
        text:
          "There are no regrets. If one can be proud of one’s life, one should not wish for another chance.",
        author: "Saber"
      },
      {
        text:
          "You can’t always hold on to the things that are important. By letting them go we gain something else.",
        author: "Kunio Yaobi"
      },
      {
        text:
          "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "Bernard M. Baruch"
      },
      {
        text:"You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
        author: "William W. Purkey"
      },
      {
        text:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author:"Dr. Seuss"
      },
      {
        text:
          "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
        author: " Life"
      },
      {
        text:
          "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
        author: "John Kenneth Galbraith"
      },
      {
        text:
          "God save me from my friends. I can protect myself from my enemies.",
        author: "Claude Louis Hector de Villars "
      },
      {
        text: "The price of anything is the amount of life you exchange for it.",
        author: "David Thoreau"
      },
      {
        text:
          "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
        author: "Charles Lindbergh"
      },
      {
        text:
          "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
        author: " Tyne Daly"
      }
    ];

    const QUOTE_NUM = Math.floor(Math.random() * QUOTE.length)
      $(".quote-text").html(QUOTE[QUOTE_NUM].text);
      $(".quote-author").html(QUOTE[QUOTE_NUM].author);

  });
});
