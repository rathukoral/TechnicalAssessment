export const waitForClickableAndClick = (ele,timeout)=>{
    ele.waitForClickable({timeout:timeout});
    ele.click();
}