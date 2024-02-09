intiFunc = () => {
  return new Promise((resolve, reject) => {
    let number = 0;
    let item;
    let intervalhandler = null;
    intervalhandler = setInterval(() => {
      flag = false;
      number++;
      item = document.getElementsByClassName("item-card selectable");

      if (item.length) {
        item[0].click();

        let btn = document.getElementsByClassName(
          "mat-focus-indicator w-100 mat-button-3d mat-button-lg mat-flat-button mat-button-base mat-accent"
        );
        if (btn.length) {
          btn[0].click();
        }
        console.log("before flag", flag);
        flag = true;
        console.log("next flag", flag);
      }
      console.log("check", flag);

      if (flag == true) {
        clearInterval(intervalhandler);
        resolve();
      }
    }, 1000);
  });
};

sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

async function Test() {
  while (true) {
    await intiFunc();
    await sleep(5000);
  }
}

Test();
