export type ComponentRegistryItem = {
  selector: string;
  className: string;
  path: string;
  inputs: string[];
  snippet: string;
};

export const COMPONENT_REGISTRY: ComponentRegistryItem[] = [
  {
    "selector": "app-about",
    "className": "AboutComponent",
    "path": "pages/about/about.component.ts",
    "inputs": [],
    "snippet": "<div class=\"about__wrapper\">\n  <div class=\"banner\">\n    <iframe\n      src=\"https://www.youtube.com/embed/kNtc_pIhJPg\"\n      title=\"YouTube video player\"\n      frameborder=\"0\""
  },
  {
    "selector": "app-about-card",
    "className": "AboutCardComponent",
    "path": "pages/about/about-card/about-card.component.ts",
    "inputs": [],
    "snippet": "<div class=\"card\" [ngClass]=\"card.class\" [style.backgroundColor]=\"card.color\">\n  <div class=\"card__title\" [innerHTML]=\"card.title | translate\"></div>\n\n  <div class=\"card__img\" *ngIf=\"card.img\">\n    <img [src]=\"card.img\" alt=\"about card image\" />\n  </div>"
  },
  {
    "selector": "app-account-info-icon",
    "className": "AccountInfoIconComponent",
    "path": "shared/icons/account-info-icon/account-info-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n>\n  <g clip-path=\"url(#clip0_5362_415)\">\n    <path"
  },
  {
    "selector": "app-account-information",
    "className": "AccountInformationComponent",
    "path": "pages/usersettings/sections/account-information/account-information.component.ts",
    "inputs": [],
    "snippet": "<app-section-header [title]=\"'basic_title' | translate\">\n  <app-account-info-icon strike=\"1\"></app-account-info-icon>\n</app-section-header>\n\n<app-client-form\n  [currentUser]=\"currentUser()\""
  },
  {
    "selector": "app-activity-icon",
    "className": "ActivityIconComponent",
    "path": "shared/icons/activity-icon/activity-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 24\" fill=\"none\">\n  <path d=\"M3.79199 3.66764V20.3326C3.79199 21.0693 4.08462 21.7757 4.6055 22.2966C5.12638 22.8175 5.83285 23.1101 6.56949 23.1101H19.7626C19.9468 23.1101 20.1234 23.037 20.2536 22.9068C20.3838 22.7765 20.457 22.5999 20.457 22.4158C20.457 22.2316 20.3838 22.055 20.2536 21.9248C20.1234 21.7945 19.9468 21.7214 19.7626 21.7214H6.56949C6.20117 21.7214 5.84794 21.5751 5.5875 21.3146C5.32706 21.0542 5.18074 20.7009 5.18074 20.3326H19.0682C19.4366 20.3326 19.7898 20.1863 20.0502 19.9259C20.3107 19.6654 20.457 19.3122 20.457 18.9439V3.66764C20.457 2.931 20.1644 2.22453 19.6435 1.70365C19.1226 1.18277 18.4161 0.890137 17.6795 0.890137H6.56949C5.83285 0.890137 5.12638 1.18277 4.6055 1.70365C4.08462 2.22453 3.79199 2.931 3.79199 3.66764ZM17.6795 2.27889C18.0478 2.27889 18.401 2.4252 18.6615 2.68564C18.9219 2.94608 19.0682 3.29932 19.0682 3.66764V18.9439H5.18074V3.66764C5.18074 3.29932 5.32706 2.94608 5.5875 2.68564C5.84794 2.4252 6.20117 2.27889 6.56949 2.27889H17.6795ZM14.327 11.8321C14.8015 11.1143 14.9925 10.246 14.8631 9.39537C14.7337 8.54477 14.293 7.77252 13.6266 7.22835C12.9601 6.68418 12.1154 6.40685 11.2561 6.45014C10.3967 6.49343 9.58413 6.85424 8.97574 7.46263C8.36735 8.07102 8.00653 8.88364 7.96325 9.74295C7.91996 10.6022 8.19728 11.447 8.74146 12.1135C9.28563 12.7799 10.0579 13.2206 10.9085 13.35C11.7591 13.4794 12.6274 13.2884 13.3452 12.8139L15.1047 14.5749C15.1693 14.6394 15.2459 14.6906 15.3303 14.7256C15.4147 14.7605 15.5051 14.7785 15.5964 14.7785C15.6877 14.7785 15.7781 14.7605 15.8624 14.7256C15.9468 14.6906 16.0234 14.6394 16.088 14.5749C16.1525 14.5103 16.2038 14.4337 16.2387 14.3493C16.2736 14.265 16.2916 14.1746 16.2916 14.0833C16.2916 13.992 16.2736 13.9015 16.2387 13.8172C16.2038 13.7328 16.1525 13.6562 16.088 13.5916L14.327 11.8321ZM9.34699 9.91701C9.34699 9.36453 9.56646 8.83468 9.95712 8.44402C10.3478 8.05336 10.8776 7.83388 11.4301 7.83388C11.9826 7.83388 12.5124 8.05336 12.9031 8.44402C13.2938 8.83468 13.5132 9.36453 13.5132 9.91701C13.5132 10.4695 13.2938 10.9993 12.9031 11.39C12.5124 11.7807 11.9826 12.0001 11.4301 12.0001C10.8776 12.0001 10.3478 11.7807 9.95712 11.39C9.56646 10.9993 9.34699 10.4695 9.34699 9.91701Z\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" [attr.fill]=\"fill()\"/>\n</svg>"
  },
  {
    "selector": "app-add-button",
    "className": "AddButtonComponent",
    "path": "shared/UIkit/buttons/add-button/add-button.component.ts",
    "inputs": [],
    "snippet": "<button\n  class=\"add-button\"\n  [disabled]=\"disabled()\"\n>\n  <app-plus-icon\n    class=\"add-button_icon\""
  },
  {
    "selector": "app-add-funds",
    "className": "AddFundsComponent",
    "path": "pages/upload/add-funds/add-funds.component.ts",
    "inputs": [],
    "snippet": "<div class=\"add-funds\">\n  {{ error }}\n  <div class=\"form__group\">\n    <label class=\"form__label\" for=\"amount\">Amount</label>\n    <input\n      class=\"form__input\""
  },
  {
    "selector": "app-add-members-icon",
    "className": "AddMembersIconComponent",
    "path": "shared/icons/add-members-icon/add-members-icon.component.ts",
    "inputs": [],
    "snippet": "<svg viewBox=\"0 0 25 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g clip-path=\"url(#clip0_6363_350)\">\n    <path d=\"M12.9725 3.60468C15.2973 3.60468 17.1819 5.48928 17.1819 7.81406C17.1819 9.24566 16.4672 10.5103 15.3752 11.2708C15.5377 11.3341 15.6973 11.4038 15.8534 11.4794C15.8593 11.4823 15.8651 11.4851 15.8709 11.4879C15.8994 11.5018 15.9279 11.516 15.9562 11.5303C15.9683 11.5364 15.9804 11.5426 15.9925 11.5488C16.0077 11.5567 16.0229 11.5645 16.038 11.5725C16.0582 11.5829 16.0782 11.5936 16.0982 11.6043C16.1088 11.6101 16.1194 11.6158 16.13 11.6216C16.3572 11.745 16.577 11.8818 16.7883 12.0312C16.7935 12.0354 16.799 12.0392 16.8044 12.0431C16.8218 12.055 16.839 12.0674 16.8561 12.0798C16.6792 11.697 16.5805 11.2704 16.5805 10.8208C16.5805 9.16021 17.9267 7.81406 19.5872 7.81406C21.2478 7.81406 22.5939 9.16021 22.5939 10.8208C22.5939 11.7111 22.207 12.511 21.5921 13.0615C23.248 13.8213 24.398 15.4941 24.398 17.4355V19.5933C24.398 19.8385 24.249 20.0592 24.0216 20.1509C22.5483 20.7452 21.069 21.0436 19.5872 21.0436C19.3753 21.0436 19.1634 21.0375 18.9516 21.0253L19.1251 21.0333L18.987 21.0879C18.8355 21.1463 18.6839 21.2025 18.5324 21.2565C18.5133 21.2633 18.4942 21.2701 18.4752 21.2768C18.4158 21.2977 18.3565 21.3183 18.2971 21.3386C18.2832 21.3433 18.2693 21.3481 18.2554 21.3528C18.1968 21.3726 18.1383 21.3921 18.0798 21.4112C18.0499 21.421 18.0198 21.4308 17.9897 21.4405C17.9417 21.4559 17.8938 21.4711 17.8459 21.486C17.8197 21.4942 17.7936 21.5023 17.7674 21.5103C17.7188 21.5253 17.6702 21.54 17.6215 21.5545C17.5978 21.5615 17.574 21.5686 17.5501 21.5756C17.4909 21.593 17.4317 21.61 17.3726 21.6266C17.3667 21.6283 17.3605 21.63 17.3544 21.6317C17.2868 21.6507 17.2193 21.6692 17.1517 21.6873C17.1321 21.6926 17.1123 21.6978 17.0926 21.703C17.0432 21.7161 16.9938 21.7288 16.9445 21.7414C16.9069 21.7509 16.8692 21.7604 16.8315 21.7697C16.7917 21.7795 16.752 21.7892 16.7122 21.7988C16.684 21.8055 16.6558 21.8122 16.6276 21.8188C16.5786 21.8302 16.5296 21.8415 16.4805 21.8525C16.4459 21.8603 16.4112 21.8679 16.3765 21.8755C16.3373 21.884 16.2982 21.8924 16.259 21.9007C16.2297 21.9068 16.2003 21.9129 16.171 21.9189C16.1167 21.9301 16.0625 21.9409 16.0083 21.9514C15.9889 21.9552 15.9695 21.9589 15.9502 21.9626C15.8969 21.9727 15.8436 21.9826 15.7903 21.9922C15.7626 21.9972 15.735 22.0021 15.7073 22.007C15.6633 22.0147 15.6193 22.0222 15.5753 22.0295C15.5372 22.0359 15.499 22.0421 15.4608 22.0482C15.4345 22.0524 15.4084 22.0565 15.3822 22.0605C15.3285 22.0688 15.2749 22.0768 15.2212 22.0845C15.1999 22.0876 15.1786 22.0906 15.1573 22.0936C15.1083 22.1004 15.0594 22.107 15.0105 22.1134C14.976 22.1179 14.9413 22.1223 14.9066 22.1266C14.8662 22.1316 14.8261 22.1364 14.7859 22.1411C14.746 22.1457 14.706 22.1502 14.666 22.1545C14.6307 22.1583 14.5953 22.1621 14.56 22.1656C14.5192 22.1698 14.4783 22.1738 14.4375 22.1776C14.4033 22.1808 14.369 22.1839 14.3347 22.1869C14.3011 22.1898 14.2675 22.1926 14.2339 22.1954C14.1863 22.1992 14.1387 22.2028 14.0911 22.2062C14.0799 22.207 14.0687 22.2078 14.0575 22.2086C13.9967 22.2128 13.936 22.2167 13.8753 22.2202C13.5744 22.2375 13.2735 22.2462 12.9725 22.2462C10.89 22.2462 8.80993 21.8302 6.73573 21.0006L6.81955 21.0333L6.67573 21.039L6.56973 21.0415L6.35772 21.0436C4.87596 21.0436 3.39668 20.7452 1.92339 20.1509C1.69594 20.0592 1.547 19.8385 1.547 19.5933V17.4355C1.547 15.4941 2.69699 13.8213 4.35294 13.0611C3.73796 12.511 3.35102 11.7111 3.35102 10.8208C3.35102 9.16021 4.69717 7.81406 6.35772 7.81406C8.01828 7.81406 9.36443 9.16021 9.36443 10.8208C9.36443 11.2705 9.26569 11.6972 9.0887 12.0803C9.27756 11.9427 9.47376 11.8155 9.67612 11.6991L9.75225 11.6562C9.75902 11.6524 9.7658 11.6486 9.77259 11.6449C9.78576 11.6374 9.79908 11.6301 9.81242 11.6228C9.83347 11.6115 9.85452 11.6002 9.87563 11.589C9.89073 11.5809 9.90598 11.5729 9.92126 11.5649C10.1312 11.4556 10.3476 11.3573 10.5699 11.2706C9.47774 10.5103 8.76309 9.24566 8.76309 7.81406C8.76309 5.48928 10.6477 3.60468 12.9725 3.60468ZM12.9725 12.0234L12.8536 12.0247C12.7791 12.0263 12.7049 12.0295 12.631 12.0341C12.6212 12.0347 12.6115 12.0353 12.6018 12.0359L12.631 12.0341C12.5994 12.0361 12.568 12.0383 12.5366 12.0408L12.6018 12.0359C12.5635 12.0385 12.5254 12.0415 12.4874 12.0449L12.5366 12.0408C12.4076 12.0511 12.2797 12.066 12.1529 12.0852C12.1513 12.0853 12.1496 12.0856 12.1479 12.0859L12.1529 12.0852C12.115 12.091 12.0771 12.0972 12.0394 12.1037L12.1479 12.0859C12.1092 12.0918 12.0707 12.0981 12.0323 12.1048L12.0394 12.1037C11.8484 12.137 11.6602 12.1803 11.4755 12.2333C11.4729 12.2339 11.4703 12.2346 11.4677 12.2354L11.4755 12.2333C11.3674 12.2643 11.2605 12.2986 11.1549 12.3362C11.1408 12.3413 11.1265 12.3464 11.1123 12.3516L11.1549 12.3362C11.1249 12.3469 11.095 12.3579 11.0651 12.3691L11.1123 12.3516C11.0795 12.3636 11.0469 12.3759 11.0145 12.3885L11.0651 12.3691C11.0357 12.3802 11.0063 12.3915 10.9771 12.4031L11.0145 12.3885C10.8644 12.4468 10.7175 12.5116 10.5742 12.5825C10.5695 12.5846 10.5649 12.5868 10.5604 12.589L10.5742 12.5825C10.4363 12.6508 10.3017 12.7248 10.1707 12.8042C10.1644 12.8075 10.1583 12.8112 10.1522 12.8149L10.1707 12.8042C9.74656 13.0613 9.36055 13.3751 9.02318 13.735C9.02245 13.7356 9.0217 13.7364 9.02096 13.7372L9.02318 13.735C9.00144 13.7582 8.97991 13.7816 8.95857 13.8052C8.94636 13.8185 8.93429 13.832 8.92228 13.8455L8.95857 13.8052C8.9307 13.836 8.90317 13.8671 8.87599 13.8985C8.86088 13.9159 8.84594 13.9334 8.83109 13.9511L8.87599 13.8985C8.05624 14.8471 7.56041 16.0834 7.56041 17.4355V20.0297L7.6212 20.0528C7.6928 20.0793 7.76439 20.1052 7.83598 20.1306C7.86924 20.1424 7.90264 20.1542 7.93603 20.1658C8.14315 20.2379 8.3501 20.3056 8.557 20.3687C8.66115 20.4005 8.76544 20.4313 8.86971 20.4609C9.12459 20.5332 9.37937 20.5988 9.63407 20.6577C9.77112 20.6893 9.90817 20.719 10.0452 20.7468C10.2109 20.7804 10.3764 20.8111 10.5419 20.8389C10.639 20.8553 10.736 20.8706 10.833 20.885C10.976 20.9062 11.1189 20.9253 11.2618 20.9422C11.4288 20.962 11.5958 20.9789 11.7627 20.9929C11.8212 20.9978 11.8795 21.0023 11.9378 21.0065C12.0537 21.0148 12.1696 21.0217 12.2855 21.0272C12.4432 21.0347 12.6008 21.0396 12.7584 21.042L12.7452 21.0415L12.7584 21.042L12.9725 21.0436L13.1865 21.042C13.3093 21.0401 13.4321 21.0368 13.555 21.0318C13.5789 21.0308 13.6028 21.0298 13.6268 21.0287L13.555 21.0318C13.6149 21.0294 13.6748 21.0266 13.7347 21.0234L13.6268 21.0287C13.6989 21.0255 13.771 21.0216 13.8432 21.0173L13.7347 21.0234C13.8138 21.0193 13.8929 21.0144 13.972 21.0089L13.8432 21.0173C13.9153 21.0129 13.9875 21.008 14.0597 21.0026L13.972 21.0089C14.0413 21.0041 14.1106 20.9989 14.1799 20.9931L14.0597 21.0026C14.134 20.997 14.2084 20.9908 14.2828 20.9841L14.1799 20.9931C14.2466 20.9875 14.3133 20.9814 14.38 20.9749L14.2828 20.9841C14.3557 20.9775 14.4287 20.9703 14.5017 20.9625L14.38 20.9749C14.4702 20.9661 14.5603 20.9565 14.6504 20.946L14.5017 20.9625C14.5677 20.9556 14.6336 20.9481 14.6996 20.9402L14.6504 20.946C14.7096 20.9391 14.7688 20.9319 14.828 20.9243L14.6996 20.9402C14.7845 20.9301 14.8694 20.9192 14.9544 20.9075L14.828 20.9243C14.8951 20.9157 14.9621 20.9066 15.0291 20.8971L14.9544 20.9075C15.0232 20.8981 15.092 20.8881 15.1608 20.8777L15.0291 20.8971C15.1096 20.8856 15.1901 20.8734 15.2707 20.8606L15.1608 20.8777C15.2286 20.8674 15.2963 20.8567 15.3641 20.8454L15.2707 20.8606C15.3526 20.8476 15.4345 20.8339 15.5164 20.8194L15.3641 20.8454C15.4314 20.8343 15.4986 20.8227 15.5659 20.8106L15.5164 20.8194C15.5844 20.8074 15.6525 20.795 15.7205 20.782L15.5659 20.8106C15.6511 20.7953 15.7363 20.7793 15.8216 20.7624L15.7205 20.782C15.7808 20.7706 15.841 20.7587 15.9012 20.7465L15.8216 20.7624C15.903 20.7464 15.9843 20.7297 16.0657 20.7122L15.9012 20.7465C15.9758 20.7314 16.0503 20.7157 16.1248 20.6995L16.0657 20.7122C16.1299 20.6985 16.194 20.6843 16.2582 20.6697L16.1248 20.6995C16.2046 20.682 16.2844 20.664 16.3642 20.6452L16.2582 20.6697C16.329 20.6536 16.3998 20.637 16.4706 20.6199L16.3642 20.6452C16.4354 20.6285 16.5066 20.6113 16.5778 20.5935L16.4706 20.6199C16.5397 20.6031 16.6089 20.5859 16.678 20.5682L16.5778 20.5935C16.659 20.5733 16.7403 20.5523 16.8215 20.5307L16.678 20.5682C16.739 20.5525 16.7999 20.5365 16.8609 20.5201L16.8215 20.5307C16.8862 20.5134 16.951 20.4958 17.0157 20.4776L16.8609 20.5201C16.9565 20.4944 17.0521 20.4677 17.1477 20.4401L17.0157 20.4776C17.089 20.4571 17.1624 20.4361 17.2357 20.4144L17.1477 20.4401C17.2151 20.4207 17.2824 20.4008 17.3497 20.3804L17.2357 20.4144C17.3101 20.3925 17.3844 20.37 17.4588 20.3469L17.3497 20.3804C17.4194 20.3593 17.4892 20.3376 17.5589 20.3155L17.4588 20.3469C17.5314 20.3244 17.604 20.3013 17.6765 20.2777L17.5589 20.3155C17.6492 20.2869 17.7395 20.2574 17.8298 20.2271L17.6765 20.2777C17.7484 20.2544 17.8203 20.2304 17.8922 20.206L17.8298 20.2271C17.9974 20.1708 18.165 20.1116 18.3327 20.0495L18.3845 20.0297V17.4355C18.3845 16.1469 17.9342 14.9634 17.1823 14.034C17.167 14.0151 17.1515 13.9962 17.1359 13.9775L17.1823 14.034C17.1612 14.0079 17.1398 13.9821 17.1183 13.9564L17.1359 13.9775C17.0882 13.92 17.0394 13.8637 16.9895 13.8085C16.9806 13.7988 16.9718 13.7891 16.963 13.7795L16.9895 13.8085C16.9679 13.7845 16.946 13.7608 16.924 13.7372L16.963 13.7795C16.9024 13.7134 16.8402 13.6488 16.7764 13.5858C16.7701 13.5793 16.7636 13.5728 16.7571 13.5665L16.7764 13.5858C16.7546 13.5643 16.7327 13.5429 16.7105 13.5217L16.7571 13.5665C16.7324 13.5423 16.7075 13.5184 16.6825 13.4948L16.7105 13.5217C16.3027 13.1321 15.8341 12.8056 15.3203 12.5578C15.3034 12.5495 15.2863 12.5414 15.2693 12.5333L15.3203 12.5578C15.2801 12.5384 15.2396 12.5195 15.1988 12.5011C15.1747 12.4901 15.1505 12.4793 15.1262 12.4688L15.1988 12.5011C15.1697 12.488 15.1406 12.4751 15.1113 12.4625L15.1262 12.4688C15.0961 12.4557 15.0659 12.443 15.0356 12.4305L15.1113 12.4625C15.0717 12.4454 15.0319 12.4288 14.9918 12.4127L15.0356 12.4305C14.9997 12.4157 14.9637 12.4013 14.9276 12.3873L14.9918 12.4127C14.9622 12.4008 14.9325 12.3892 14.9026 12.3778L14.9276 12.3873C14.8193 12.3454 14.7095 12.3069 14.5983 12.272C14.5866 12.2682 14.5748 12.2646 14.563 12.2609L14.5983 12.272C14.5592 12.2597 14.52 12.2479 14.4806 12.2365L14.563 12.2609C14.5306 12.251 14.4981 12.2414 14.4655 12.232L14.4806 12.2365C14.3336 12.1939 14.1843 12.1575 14.0331 12.1275C14.0256 12.1258 14.0182 12.1244 14.0109 12.123L14.0331 12.1275C13.958 12.1126 13.8825 12.0992 13.8065 12.0875C13.8 12.0863 13.7936 12.0853 13.7872 12.0844L13.8065 12.0875C13.7264 12.0751 13.6458 12.0644 13.5649 12.0556C13.5591 12.0549 13.5532 12.0542 13.5472 12.0536L13.5649 12.0556C13.5283 12.0516 13.4916 12.048 13.4549 12.0447L13.5472 12.0536C13.5011 12.0487 13.4548 12.0444 13.4084 12.0407L13.4549 12.0447C13.421 12.0417 13.3871 12.039 13.3531 12.0367L13.4084 12.0407C13.3731 12.0379 13.3377 12.0355 13.3022 12.0333L13.3531 12.0367C13.3138 12.0339 13.2744 12.0316 13.2349 12.0297L13.3022 12.0333C13.2658 12.0311 13.2293 12.0293 13.1928 12.0278L13.2349 12.0297C13.1478 12.0256 13.0603 12.0234 12.9725 12.0234ZM19.5872 13.8275C19.2499 13.8275 18.9197 13.8736 18.6034 13.9631C19.2273 14.9724 19.5872 16.1619 19.5872 17.4355V19.8409C20.7856 19.8409 21.986 19.6218 23.191 19.1819L23.1953 19.18V17.4355C23.1953 15.4735 21.6292 13.8773 19.6789 13.8286L19.5872 13.8275ZM6.35772 13.8275C4.36506 13.8275 2.74968 15.4428 2.74968 17.4355V19.1803L2.95539 19.2534C4.02938 19.6237 5.0998 19.8185 6.16849 19.8391L6.35772 19.8409V17.4355C6.35772 16.1619 6.71766 14.9724 7.34135 13.9631C7.02522 13.8736 6.695 13.8275 6.35772 13.8275ZM19.5872 9.01674C18.5909 9.01674 17.7832 9.82443 17.7832 10.8208C17.7832 11.8171 18.5909 12.6248 19.5872 12.6248C20.5836 12.6248 21.3912 11.8171 21.3912 10.8208C21.3912 9.82443 20.5836 9.01674 19.5872 9.01674ZM6.35772 9.01674C5.36139 9.01674 4.5537 9.82443 4.5537 10.8208C4.5537 11.8171 5.36139 12.6248 6.35772 12.6248C7.35406 12.6248 8.16175 11.8171 8.16175 10.8208C8.16175 9.82443 7.35406 9.01674 6.35772 9.01674ZM12.9725 4.80736C11.3119 4.80736 9.96577 6.1535 9.96577 7.81406C9.96577 9.47462 11.3119 10.8208 12.9725 10.8208C14.633 10.8208 15.9792 9.47462 15.9792 7.81406C15.9792 6.1535 14.633 4.80736 12.9725 4.80736Z\" fill=\"#1E1E1E\" [attr.stroke]=\"color()\" stroke-width=\"0.277333\"/>\n    <path d=\"M12.9724 14.5173V18.973\" [attr.stroke]=\"color()\" stroke-width=\"1.38667\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <path d=\"M10.7446 16.7453H15.2003\" [attr.stroke]=\"color()\" stroke-width=\"1.38667\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </g>"
  },
  {
    "selector": "app-add-payment-method-form",
    "className": "AddPaymentMethodFormComponent",
    "path": "shared/components/add-payment-method-form/add-payment-method-form.component.ts",
    "inputs": [],
    "snippet": "<section style=\"width: 100%\">\n  <div id=\"card-element\"></div>\n\n  <div id=\"card-errors\" role=\"alert\"></div>\n\n  <button"
  },
  {
    "selector": "app-add-to-review-queue",
    "className": "AddToReviewQueueComponent",
    "path": "pages/open-requests/components/add-to-review-queue/add-to-review-queue.component.ts",
    "inputs": [
      "openRequest"
    ],
    "snippet": "<app-heart-icon\n  class=\"add-to-review-queue_icon\"\n  color=\"#757575\"\n  [fill]=\"isAddedToQueue() ? '#FDD3D0' : 'white'\"\n></app-heart-icon>\n"
  },
  {
    "selector": "app-add-user-icon",
    "className": "AddUserIconComponent",
    "path": "shared/icons/add-user-icon/add-user-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 31 40\" fill=\"none\">\n  <g clip-path=\"url(#clip0_5223_6987)\">\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.20703 9.85753C4.20703 14.9849 8.36306 19.1407 13.4902 19.1407C18.6195 19.1407 22.7753 14.9847 22.7753 9.85753C22.7753 4.72829 18.6193 0.572449 13.4902 0.572449C8.36287 0.572449 4.20703 4.72848 4.20703 9.85753ZM13.4902 16.2088C9.98289 16.2088 7.13897 13.3648 7.13897 9.85753C7.13897 6.34836 9.98294 3.50438 13.4902 3.50438C16.9994 3.50438 19.8434 6.34836 19.8434 9.85753C19.8434 13.3649 16.9994 16.2088 13.4902 16.2088Z\" [attr.fill]=\"fill()\"/>\n    <path d=\"M25.7073 25.9829H22.7754V30.8682H17.8882V33.8002H22.7754V38.6873H25.7073V33.8002H30.5945V30.8682H25.7073V25.9829Z\" [attr.fill]=\"fill()\"/>\n    <path d=\"M16.5118 22.0724L10.4702 38.6873H0.296143V22.0724H16.5118Z\" [attr.fill]=\"fill()\"/>\n  </g>"
  },
  {
    "selector": "app-add-user-modal",
    "className": "AddUserModalComponent",
    "path": "pages/usersettings/components/add-user-modal/add-user-modal.component.ts",
    "inputs": [],
    "snippet": "<div class=\"add-user-modal\">\n  <mat-tab-group\n    [(selectedIndex)]=\"selectedTab\"\n    (selectedIndexChange)=\"onTabChange($event)\"\n    class=\"add-user-modal__tabs\"\n  >"
  },
  {
    "selector": "app-adding-user",
    "className": "AddingUserComponent",
    "path": "pages/conversation/components/adding-user/adding-user.component.ts",
    "inputs": [],
    "snippet": "<form class=\"add-user\" [formGroup]=\"addUserForm\">\n  <mat-icon class=\"add-user__close\" (click)=\"close()\">close</mat-icon>\n  <div class=\"add-user__inputs\">\n    <h3 class=\"add-user__title\">{{ 'adding_user.add_people' | translate }} {{ ('adding_user.' + inviteTo()) | translate }}</h3>\n\n    <div class=\"form__group\">"
  },
  {
    "selector": "app-additional-menu",
    "className": "AdditionalMenuComponent",
    "path": "pages/conversation/components/additional-menu/additional-menu.component.ts",
    "inputs": [
      "conversationId"
    ],
    "snippet": "<div\n  class=\"additional-menu\"\n  [@openClose]=\"isDisplayAdditionalMenu() ? 'open' : 'closed'\"\n>\n  <div class=\"additional-menu__header\">\n    <app-close-icon (click)=\"closeAdditionalMenu()\"></app-close-icon>"
  },
  {
    "selector": "app-admin",
    "className": "AdminComponent",
    "path": "pages/admin/admin.component.ts",
    "inputs": [],
    "snippet": "<div class=\"topmenu\">\n  <ul class=\"main-nav\">\n    <li class=\"main-nav__item\">\n      <a\n        class=\"main-nav__link\"\n        routerLinkActive=\"active\""
  },
  {
    "selector": "app-admin-rateflow",
    "className": "AdminRateflowComponent",
    "path": "pages/admin/projects/admin-rateflow/admin-rateflow.component.ts",
    "inputs": [],
    "snippet": "<app-small-spinner [diameter]=\"50\" *ngIf=\"!project\"></app-small-spinner>\n<div class=\"admin-rateflow\">\n  <div class=\"admin-rateflow__presentation\" *ngIf=\"!noprojects\">\n    <app-presentation-slider\n      [isRateflowPresentation]=\"true\"\n      [isSingleFileProject]=\"isSingleFileProject\""
  },
  {
    "selector": "app-advisor-card",
    "className": "AdvisorCardComponent",
    "path": "pages/advisors/advisor-card/advisor-card.component.ts",
    "inputs": [],
    "snippet": "<div class=\"advisor-card\">\n  <div class=\"advisor-card__badge\" *ngIf=\"advisor.pinned\">\n    <img\n      src=\"assets/icons/pin.svg\"\n      alt=\"badge-pin\"\n      class=\"advisor-card__badge-icon black-to-white\""
  },
  {
    "selector": "app-advisor-info-card",
    "className": "AdvisorInfoCardComponent",
    "path": "pages/newsfeed/advisor-info-card/advisor-info-card.component.ts",
    "inputs": [],
    "snippet": "<div\n  class=\"advisor-card\"\n  [ngClass]=\"{ 'advisor-card--grey': isRemove }\"\n  *ngIf=\"isInUserActionMode\"\n>\n  <div class=\"advisor-card__button-post-action\">"
  },
  {
    "selector": "app-advisor-schedule",
    "className": "AdvisorScheduleComponent",
    "path": "pages/advisors/advisor-schedule/advisor-schedule.component.ts",
    "inputs": [],
    "snippet": "<div class=\"schedule\">\n  <div class=\"schedule__days\">\n    <div\n      *ngFor=\"let day of days\"\n      class=\"schedule__day\"\n      [ngClass]=\"{ 'schedule__day--active': day.status }\""
  },
  {
    "selector": "app-advisor-skillset",
    "className": "AdvisorSkillsetComponent",
    "path": "pages/usersettings/components/advisor-skillset/advisor-skillset.component.ts",
    "inputs": [],
    "snippet": "@if (isLoading) {\n  <app-small-spinner [diameter]=\"50\" class=\"mt-2\"></app-small-spinner>\n}\n\n@if (!!allSkills && !!userSkills()) {\n  <div cdkDropList (cdkDropListDropped)=\"drop($event)\">"
  },
  {
    "selector": "app-advisors",
    "className": "AdvisorsComponent",
    "path": "pages/advisors/advisors.component.ts",
    "inputs": [],
    "snippet": "<div class=\"advisors\">\n  <div\n    class=\"search-bar\"\n    *ngIf=\"isSmallScreen && (selectedSkills$ | async).length\"\n  >\n    <app-search-bar></app-search-bar>"
  },
  {
    "selector": "app-advisors-intro-card",
    "className": "AdvisorsIntroCardComponent",
    "path": "pages/advisors/advisors-intro-card/advisors-intro-card.component.ts",
    "inputs": [],
    "snippet": "<div id=\"advisors-intro-card\" #cardRef class=\"advisors-intro-card\"></div>"
  },
  {
    "selector": "app-aim-icon",
    "className": "AimIconComponent",
    "path": "shared/icons/aim-icon/aim-icon.component.ts",
    "inputs": [
      "color"
    ],
    "snippet": ""
  },
  {
    "selector": "app-aimed-heart-icon",
    "className": "AimedHeartIconComponent",
    "path": "shared/icons/aimed-heart-icon/aimed-heart-icon.component.ts",
    "inputs": [
      "aimColor",
      "heartColor"
    ],
    "snippet": "<app-aim-icon\n  class=\"aimed-heart_aim-icon\"\n  [color]=\"aimColor()\"\n></app-aim-icon>\n\n<app-heart-icon"
  },
  {
    "selector": "app-arrow-down-icon",
    "className": "ArrowDownIconComponent",
    "path": "shared/icons/arrow-down-icon/arrow-down-icon.component.ts",
    "inputs": [
      "type"
    ],
    "snippet": "@if(type() === 'standard'){\n  <svg width=\"28px\" height=\"25px\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#000000\" d=\"M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z\"/></svg>\n}\n@if(type() === 'long'){\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\">\n    <path d=\"M10.5 4.74139V16.4081M10.5 16.4081L16.3333 10.5747M10.5 16.4081L4.66663 10.5747\" stroke=\"#1E1E1E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
  },
  {
    "selector": "app-arrow-left-circle-icon",
    "className": "ArrowLeftCircleIconComponent",
    "path": "shared/icons/arrow-left-circle-icon/arrow-left-circle-icon.component.ts",
    "inputs": [
      "color",
      "hoverColor"
    ],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\">\n  <path d=\"M14.6426 26.746C7.92839 26.746 2.48544 21.3031 2.48544 14.5888C2.48544 7.8746 7.92839 2.43164 14.6426 2.43164C21.3568 2.43164 26.7998 7.8746 26.7998 14.5888C26.7998 21.3031 21.3568 26.746 14.6426 26.746Z\"\n        [attr.stroke]=\"currentColor()\"\n        stroke-width=\"2.01222\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\""
  },
  {
    "selector": "app-arrow-right-circle-icon",
    "className": "ArrowRightCircleIconComponent",
    "path": "shared/icons/arrow-right-circle-icon/arrow-right-circle-icon.component.ts",
    "inputs": [
      "color",
      "hoverColor"
    ],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\">\n  <path\n    d=\"M14.8199 26.746C21.5341 26.746 26.9771 21.3031 26.9771 14.5888C26.9771 7.8746 21.5341 2.43164 14.8199 2.43164C8.10568 2.43164 2.66272 7.8746 2.66272 14.5888C2.66272 21.3031 8.10568 26.746 14.8199 26.746Z\"\n    [attr.stroke]=\"currentColor()\"\n    stroke-width=\"2.01222\"\n    stroke-linecap=\"round\""
  },
  {
    "selector": "app-arrow-up-icon",
    "className": "ArrowUpIconComponent",
    "path": "shared/icons/arrow-up-icon/arrow-up-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 20 20\" fill=\"none\">\n  <path d=\"M10.0001 15.8334V4.16675M10.0001 4.16675L4.16675 10.0001M10.0001 4.16675L15.8334 10.0001\" stroke=\"#1E1E1E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-art-categories",
    "className": "ArtCategoriesComponent",
    "path": "pages/admin/art-categories/art-categories.component.ts",
    "inputs": [],
    "snippet": "<div class=\"spinner\" *ngIf=\"!loadedCategories\">\n  <app-small-spinner [diameter]=\"50\"></app-small-spinner>\n</div>\n\n<div class=\"admin\" *ngIf=\"loadedCategories\">\n  <div class=\"admin__menu\">"
  },
  {
    "selector": "app-artfields",
    "className": "ArtfieldsComponent",
    "path": "pages/admin/artfields/artfields.component.ts",
    "inputs": [],
    "snippet": "<div class=\"artfields\">\n  <div class=\"artfields__list\">\n    <h2 (click)=\"onCreateRequest()\" class=\"add-new\">+</h2>\n    <app-small-spinner [diameter]=\"30\" *ngIf=\"!artfields\"></app-small-spinner>\n    <p\n      (click)=\"onSelect(artfield)\""
  },
  {
    "selector": "app-artrelations",
    "className": "ArtrelationsComponent",
    "path": "pages/admin/art-categories/artrelations/artrelations.component.ts",
    "inputs": [],
    "snippet": "<div\n  class=\"spinner\"\n  *ngIf=\"(!artCategories || !loadedRelations) && selectedCategorySub.getValue()\"\n>\n  <app-small-spinner [diameter]=\"50\"></app-small-spinner>\n</div>"
  },
  {
    "selector": "app-ask-a-question",
    "className": "AskAQuestionComponent",
    "path": "pages/profile/components/_child/ask-a-question/ask-a-question.component.ts",
    "inputs": [],
    "snippet": "<p>ask-a-question works!</p>"
  },
  {
    "selector": "app-audio-icon",
    "className": "AudioIconComponent",
    "path": "shared/icons/audio-icon/audio-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\" fill=\"none\">\n  <g clip-path=\"url(#clip0_7226_11188)\">\n    <path d=\"M19.3638 10.0487V12.0487C19.3638 13.9053 18.6263 15.6857 17.3135 16.9985C16.0008 18.3112 14.2203 19.0487 12.3638 19.0487M12.3638 19.0487C10.5073 19.0487 8.72678 18.3112 7.41402 16.9985C6.10127 15.6857 5.36377 13.9053 5.36377 12.0487V10.0487M12.3638 19.0487V22.7809M12.2832 1.32592C11.4875 1.32592 10.7245 1.64199 10.1618 2.2046C9.59924 2.76721 9.36377 3.25309 9.36377 4.04874V12.0487C9.36377 12.8444 9.67984 13.6074 10.2424 14.1701C10.8051 14.7327 11.5681 15.0487 12.3638 15.0487C13.1594 15.0487 13.9225 14.7327 14.4851 14.1701C15.0477 13.6074 15.3638 12.8444 15.3638 12.0487V4.04874C15.3638 3.25309 14.9671 2.76721 14.4045 2.2046C13.8419 1.64199 13.0788 1.32592 12.2832 1.32592Z\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </g>\n  <defs>\n    <clipPath id=\"clip0_7226_11188\">"
  },
  {
    "selector": "app-audio-message",
    "className": "AudioMessageComponent",
    "path": "shared/components/audio-message/audio-message.component.ts",
    "inputs": [
      "direction",
      "audioMessage"
    ],
    "snippet": "<div class=\"wrapper\" #wrapperRef>\n  <div class=\"audio-container\" [ngClass]=\"direction() === 'right' ? 'light' : 'dark'\">\n    <div class=\"not-loaded\" *ngIf=\"!loaded\">\n      <button\n        class=\"load-message\"\n        [ngClass]=\"{ 'load-message--loading': loading || !audioMessage().url }\""
  },
  {
    "selector": "app-audio-record",
    "className": "AudioRecordComponent",
    "path": "shared/components/audio-record/audio-record.component.ts",
    "inputs": [
      "hasHost"
    ],
    "snippet": "<div\n  class=\"chat__message-box\"\n  [ngClass]=\"{ 'chat__message-box--collapsed': isCollapsed }\"\n>\n  <div\n    class=\"input-wrapper\""
  },
  {
    "selector": "app-auth",
    "className": "AuthComponent",
    "path": "auth/auth.component.ts",
    "inputs": [
      "authMode",
      "restrictSwitchMode",
      "predefinedEmail",
      "predefinedOrganization",
      "submitWithoutOrganization"
    ],
    "snippet": "<div class=\"authform-container\" [ngClass]=\"{login: isLoginMode}\" #authRef>\n  <div class=\"authform__image-container\" [ngClass]=\"{signup: isSignupMode}\">\n    <div class=\"authform__logo-container\">\n      <app-ngo-ngo-logo-icon fill=\"#1E1E1E\"></app-ngo-ngo-logo-icon>\n    </div>\n    <img [ngSrc]=\""
  },
  {
    "selector": "app-auth-modal",
    "className": "AuthModalComponent",
    "path": "shared/components/auth-modal/auth-modal.component.ts",
    "inputs": [],
    "snippet": "<app-close-icon mat-dialog-close></app-close-icon>\n@if (data.mode === 'login') {\n  <app-login-modal [conversationId]=\"data.conversationId\" (closeModal)=\"close($event)\"></app-login-modal>\n} @else {\n  <app-signup-modal [conversationId]=\"data.conversationId\" (closeModal)=\"close($event)\"></app-signup-modal>\n}"
  },
  {
    "selector": "app-autocomplete",
    "className": "AutocompleteComponent",
    "path": "shared/UIkit/autocomplete/autocomplete.component.ts",
    "inputs": [
      "placeholder"
    ],
    "snippet": "<ng-template #root>\n  <div class=\"autocomplete\">\n    <ng-container *ngTemplateOutlet=\"content.tpl\"></ng-container>\n  </div>\n</ng-template>"
  },
  {
    "selector": "app-autocomplete-option",
    "className": "AutocompleteOptionComponent",
    "path": "shared/UIkit/autocomplete/autocomplete-option/autocomplete-option.component.ts",
    "inputs": [
      "value"
    ],
    "snippet": "<div class=\"option\">\n  <ng-content></ng-content>\n</div>"
  },
  {
    "selector": "app-av-pane",
    "className": "AvPaneComponent",
    "path": "pages/rateflow/flexfeedback/av-pane/av-pane.component.ts",
    "inputs": [],
    "snippet": "<ng-container *ngIf=\"!noAvParams; else noAvParamsTpl\">\n  <div class=\"avsliders-container\">\n    @for(avparam of selectedFile.avratingparams; track avparam.id) {\n      <div\n        class=\"slider-item-v2 {{\n        !activeAVParam?.color ? 'avsliders-disabled' : ''"
  },
  {
    "selector": "app-av-rating-slider",
    "className": "AvRatingSliderComponent",
    "path": "pages/rateflow/av-rating-slider/av-rating-slider.component.ts",
    "inputs": [],
    "snippet": "<div\n  class=\"av-rating-slider\"\n  [ngClass]=\"param.active && (!paused() || (paused() && param.focused)) ? 'av-rating-slider__active--' + color : 'av-rating-slider' \"\n  (click)=\"onParamClick()\"\n>\n  <div"
  },
  {
    "selector": "app-available-time-slots",
    "className": "AvailableTimeSlotsComponent",
    "path": "pages/advisors/advisor-card/available-time-slots/available-time-slots.component.ts",
    "inputs": [],
    "snippet": "<button\n  class=\"icon-btn\"\n  cdkOverlayOrigin\n  #trigger=\"cdkOverlayOrigin\"\n  (click)=\"isOpen = !isOpen\"\n>"
  },
  {
    "selector": "app-avpresentation",
    "className": "AvpresentationComponent",
    "path": "pages/rateflow/avpresentation/avpresentation.component.ts",
    "inputs": [
      "isAudio",
      "displayPlayBtn"
    ],
    "snippet": "<div class=\"avpresentation\">\n  @if (isAudio()) {\n    <h6 class=\"avpresentation__audio-title\">{{ file.name }}</h6>\n  }\n  <div class=\"avpresentation__wave\" [ngClass]=\"{ 'is-audio': isAudio() }\">\n    <div #waveformRef></div>"
  },
  {
    "selector": "app-avpresentation-video",
    "className": "AvpresentationVideoComponent",
    "path": "pages/rateflow/avpresentation-video/avpresentation-video.component.ts",
    "inputs": [],
    "snippet": "<div #videoRef class=\"avpresentation-video-container\">\n  <div\n    class=\"avpresentation-video\"\n    *ngIf=\"showVideo\"\n    [ngClass]=\"{ 'avpresentation-video--big': isRateflowPresentation }\"\n  >"
  },
  {
    "selector": "app-bank-card-form-modal",
    "className": "BankCardFormModalComponent",
    "path": "shared/components/bank-card-form-modal/bank-card-form-modal.component.ts",
    "inputs": [],
    "snippet": "<button class=\"close-btn\" (click)=\"close()\">\n  <img src=\"assets/close-modal-icon.svg\" alt=\"close-modal-icon\" />\n</button>\n<app-stripe-bank-card-form [secret]=\"secret\" (updatePaymentStatus)=\"paid()\">\n</app-stripe-bank-card-form>"
  },
  {
    "selector": "app-become-advisor-modal",
    "className": "BecomeAdvisorModalComponent",
    "path": "pages/profile/rudimentary/become-advisor-modal/become-advisor-modal.component.ts",
    "inputs": [],
    "snippet": "<section class=\"modal-container\" mat-dialog-content>\n  <div class=\"close-section\">\n    <button (click)=\"close()\" class=\"close-btn\">\n      <img src=\"../../../../../assets/close-modal-icon.svg\" alt=\"Close  icon\" />\n    </button>\n  </div>"
  },
  {
    "selector": "app-bell-icon",
    "className": "BellIconComponent",
    "path": "shared/icons/bell-icon/bell-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n>\n  <path\n    d=\"M82.2978 38.812C77.745 33.4725 72.0007 29.278 65.5286 26.567C65.3664 26.5253 65.2116 26.4589 65.0696 26.3703C58.8516 23.8128 52.1879 22.5146 45.4645 22.5509C38.7192 22.5059 32.0323 23.8042 25.7939 26.3703C25.6519 26.4589 25.4971 26.5253 25.3349 26.567C18.8864 29.2869 13.1655 33.4808 8.6313 38.812C7.01589 40.6656 6.12598 43.0413 6.12598 45.5C6.12598 47.9587 7.01589 50.3344 8.6313 52.188C13.1841 57.5275 18.9284 61.722 25.4005 64.433C25.5651 64.4673 25.7211 64.5342 25.8595 64.6297C32.0775 67.1872 38.7412 68.4854 45.4645 68.4491C52.2099 68.4941 58.8968 67.1958 65.1352 64.6297C65.2735 64.5342 65.4296 64.4673 65.5941 64.433C72.0663 61.722 77.8105 57.5275 82.3633 52.188C83.982 50.3359 84.874 47.9597 84.874 45.5C84.874 43.0403 83.982 40.664 82.3633 38.812H82.2978ZM45.4645 66.8098C41.2498 66.8098 37.1298 65.56 33.6254 63.2185C30.121 60.8769 27.3897 57.5488 25.7768 53.6549C24.1639 49.7611 23.7419 45.4764 24.5642 41.3427C25.3864 37.2089 27.416 33.4119 30.3962 30.4317C33.3764 27.4514 37.1735 25.4219 41.3072 24.5996C45.4409 23.7774 49.7256 24.1994 53.6195 25.8123C57.5133 27.4252 60.8415 30.1565 63.183 33.6609C65.5246 37.1653 66.7744 41.2853 66.7744 45.5C66.7744 51.1517 64.5292 56.572 60.5329 60.5683C56.5365 64.5647 51.1163 66.8098 45.4645 66.8098Z\""
  },
  {
    "selector": "app-blog",
    "className": "BlogComponent",
    "path": "pages/blog/blog.component.ts",
    "inputs": [],
    "snippet": "<app-coming-soon></app-coming-soon>"
  },
  {
    "selector": "app-blog-icon",
    "className": "BlogIconComponent",
    "path": "shared/icons/blog-icon/blog-icon.component.ts",
    "inputs": [],
    "snippet": "<svg viewBox=\"0 0 48 49\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n        d=\"M36.8342 36.8227C36.4498 37.1283 36.2473 37.3364 35.9998 37.7639C35.1467 39.2395 35.6586 41.152 37.1304 42.0014C38.6023 42.8508 40.5092 42.3595 41.3755 40.8614C42.2286 39.3877 41.7167 37.4733 40.243 36.6239C39.1817 36.0108 37.8336 36.082 36.8323 36.8208L36.8342 36.8227ZM33.8023 5.04716C36.5004 2.34903 40.8746 2.34903 43.5746 5.04716C46.2728 7.74528 46.2728 12.1214 43.5746 14.8195C41.3677 17.0264 37.9966 17.4539 35.3378 15.9782L32.3153 19.0008C33.7141 21.5189 33.3934 24.6427 31.5372 26.8252L36.1666 32.8814C40.0047 31.3777 44.3002 33.5658 45.3614 37.5258C46.3477 41.2064 44.1502 45.0013 40.475 45.9858C36.7963 46.972 32.9995 44.7708 32.015 41.0994C31.4488 38.9882 31.9138 36.8582 33.1475 35.1949L28.3644 28.9362C26.227 29.615 23.9132 29.2099 22.147 27.8937L15.7438 32.7873C16.7544 35.3617 16.1244 38.2698 14.195 40.1975C11.4969 42.8956 7.12271 42.8956 4.42271 40.1975C1.72458 37.4994 1.72458 33.1233 4.42271 30.4252C6.84522 28.0027 10.6833 27.7177 13.4323 29.7671L19.8355 24.8735C19.543 24.1253 19.3743 23.3153 19.3611 22.4678L15.2286 21.3597C14.6174 22.376 13.7586 23.2028 12.7555 23.7822C9.44429 25.6947 5.24064 24.5641 3.32784 21.251C1.4172 17.9398 2.54222 13.738 5.85158 11.8233C9.16094 9.91268 13.3722 11.0396 15.2865 14.3471C15.8658 15.3502 16.194 16.4958 16.2146 17.6827L20.3452 18.7889C22.2577 15.6108 26.3582 14.4896 29.6208 16.3008L32.6433 13.2783C31.1677 10.6195 31.5951 7.24853 33.802 5.04149L33.8023 5.04716ZM11.4991 33.1233C10.2897 31.914 8.3266 31.914 7.11724 33.1233C5.90788 34.3327 5.90788 36.2958 7.11724 37.5052C8.3266 38.7146 10.2897 38.7146 11.4991 37.5052C12.7085 36.2958 12.7085 34.3327 11.4991 33.1233ZM8.50472 20.8008C10.1285 21.2564 11.8535 20.2889 12.3035 18.6089C12.5266 17.7782 12.3954 16.9382 11.9997 16.2539C11.1279 14.7614 9.22098 14.2627 7.75285 15.1195C5.45034 16.4489 5.74472 20.0285 8.50285 20.8008L8.50472 20.8008ZM41.786 9.93308C41.786 8.2212 40.4004 6.83559 38.6885 6.83559C36.9766 6.83559 35.591 8.22308 35.591 9.93308C35.591 11.6449 36.9785 13.0306 38.6885 13.0306C40.4004 13.0306 41.786 11.6431 41.786 9.93308ZM28.4622 24.5433C29.6715 23.334 29.6715 21.3708 28.4622 20.1614C27.2528 18.9521 25.2897 18.9521 24.0803 20.1614C22.8709 21.3708 22.8709 23.334 24.0803 24.5433C25.2897 25.7527 27.2528 25.7527 28.4622 24.5433Z\"\n        [attr.fill]=\"fill()\" />\n</svg>"
  },
  {
    "selector": "app-brilliant-animation",
    "className": "BrilliantAnimationComponent",
    "path": "pages/why/brilliant-animation/brilliant-animation.component.ts",
    "inputs": [],
    "snippet": "<div #cardRef class=\"brilliant-animation\">\n  <div #headerRef></div>\n  <img\n    [hidden]=\"!isLamp\"\n    class=\"brilliant-animation__lamp\"\n    src=\"assets/why/animation-lamp.svg\""
  },
  {
    "selector": "app-button",
    "className": "ButtonComponent",
    "path": "shared/UIkit/button/button.component.ts",
    "inputs": [
      "size",
      "btnUIType",
      "type",
      "iconBtn",
      "dangerBtn",
      "selected",
      "disabled",
      "rounded"
    ],
    "snippet": "<button class=\"btn-entity\"\n        [ngClass]=\"[size(), btnUIType(), (dangerBtn() ? 'danger' : ''), (iconBtn() ? 'icon': ''), (selected() ? 'selected': ''), (rounded() ? 'rounded': '')]\"\n        [disabled]=\"disabled()\"\n        [type]=\"type()\"\n>\n  <ng-content></ng-content>"
  },
  {
    "selector": "app-button-chip",
    "className": "ButtonChipComponent",
    "path": "shared/UIkit/buttons/button-chip/button-chip.component.ts",
    "inputs": [
      "chipItem",
      "isSelected",
      "canBeSelectedStyled"
    ],
    "snippet": ""
  },
  {
    "selector": "app-button-close",
    "className": "ButtonCloseComponent",
    "path": "shared/UIkit/buttons/button-close/button-close.component.ts",
    "inputs": [],
    "snippet": "<app-button\n  class=\"close-button\"\n  size=\"small\"\n  btnUIType=\"subtle\"\n>\n  <app-close-icon"
  },
  {
    "selector": "app-button-edit",
    "className": "ButtonEditComponent",
    "path": "shared/UIkit/buttons/button-edit/button-edit.component.ts",
    "inputs": [
      "editTargetName"
    ],
    "snippet": "<app-button\n  btnUIType=\"neutral\"\n  size=\"small\"\n>\n  <span\n    [innerHTML]=\"('button-edit.edit' | translate) + afterEditText()\""
  },
  {
    "selector": "app-button-filter",
    "className": "ButtonFilterComponent",
    "path": "shared/UIkit/buttons/button-filter/button-filter.component.ts",
    "inputs": [
      "isActive",
      "isOpened"
    ],
    "snippet": "<button class=\"filter-btn\"\n        [ngClass]=\"{active: isActive(), opened: isOpened()}\"\n>\n  <app-settings-icon\n    class=\"filter-btn_icon\"\n    [color]=\"isActive() ? '#F5F5F5' : '#1E1E1E'\""
  },
  {
    "selector": "app-button-icon-edit",
    "className": "ButtonIconEditComponent",
    "path": "shared/UIkit/buttons/button-icon-edit/button-icon-edit.component.ts",
    "inputs": [
      "disabled",
      "size"
    ],
    "snippet": "<app-button\n  [size]=\"size()\"\n  btnUIType=\"subtle\"\n  [disabled]=\"disabled()\"\n>\n  <app-icon-edit"
  },
  {
    "selector": "app-button-icon-oval",
    "className": "ButtonIconOvalComponent",
    "path": "shared/UIkit/buttons/button-icon-oval/button-icon-oval.component.ts",
    "inputs": [],
    "snippet": "<button\n  [ngClass]=\"{ active: isActive() }\"\n  [disabled]=\"disabled()\"\n  class=\"action\"\n>\n  <div class=\"icon\">"
  },
  {
    "selector": "app-button-icon-save",
    "className": "ButtonIconSaveComponent",
    "path": "shared/UIkit/buttons/button-icon-save/button-icon-save.component.ts",
    "inputs": [
      "disabled",
      "size"
    ],
    "snippet": "<app-button\n  [size]=\"size()\"\n  btnUIType=\"primary\"\n  [disabled]=\"disabled()\"\n>\n  <app-save-icon"
  },
  {
    "selector": "app-button-more-vert",
    "className": "ButtonMoreVertComponent",
    "path": "shared/UIkit/buttons/button-more-vert/button-more-vert.component.ts",
    "inputs": [
      "isActive",
      "color",
      "borderColor",
      "backgroundColor",
      "hoverBackgroundColor",
      "activeColor",
      "activeBorderColor",
      "activeBackgroundColor",
      "activeHoverBackgroundColor"
    ],
    "snippet": "<app-icon-more-vertical\n  class=\"button-more-vert\"\n  [color]=\"currentColor()\"\n  [ngStyle]=\"{\n    'border-color': currentBorderColor(),\n    'background-color': currentBackgroundColor()"
  },
  {
    "selector": "app-button-navigation-item",
    "className": "ButtonNavigationItemComponent",
    "path": "shared/UIkit/buttons/button-navigation-item/button-navigation-item.component.ts",
    "inputs": [
      "navigationItem"
    ],
    "snippet": "<a class=\"navigation-button\"\n   [routerLink]=\"routerLink()\"\n   [routerLinkActive]=\"'active'\"\n   (isActiveChange)=\"isActive.set($event)\"\n>\n  <app-icon-render"
  },
  {
    "selector": "app-button-save",
    "className": "ButtonSaveComponent",
    "path": "shared/UIkit/buttons/button-save/button-save.component.ts",
    "inputs": [
      "disabled",
      "size"
    ],
    "snippet": "<app-button\n  [size]=\"size()\"\n  btnUIType=\"primary\"\n  [disabled]=\"disabled()\"\n>\n  {{ 'button-save.save' | translate }}"
  },
  {
    "selector": "app-calendar-icon",
    "className": "CalendarIconComponent",
    "path": "shared/icons/calendar-icon/calendar-icon.component.ts",
    "inputs": [],
    "snippet": "<svg viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g clip-path=\"url(#clip0_4840_953)\">\n    <path d=\"M7.79429 0.901123V2.70915M4.17824 0.901123V2.70915M1.91821 4.51717H10.0543M2.82222 1.80514H9.15031C9.64958 1.80514 10.0543 2.20987 10.0543 2.70915V9.03723C10.0543 9.5365 9.64958 9.94124 9.15031 9.94124H2.82222C2.32295 9.94124 1.91821 9.5365 1.91821 9.03723V2.70915C1.91821 2.20987 2.32295 1.80514 2.82222 1.80514Z\" [attr.stroke]=\"color()\" stroke-width=\"1.08481\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </g>\n  <defs>\n    <clipPath id=\"clip0_4840_953\">"
  },
  {
    "selector": "app-camera-icon",
    "className": "CameraIconComponent",
    "path": "shared/icons/camera-icon/camera-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  width=\"24\"\n  height=\"25\"\n  viewBox=\"0 0 24 25\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\""
  },
  {
    "selector": "app-cancel-icon",
    "className": "CancelIconComponent",
    "path": "shared/icons/cancel-icon/cancel-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\">\n  <path d=\"M12.7207 4L4.7207 12M4.7207 4L12.7207 12\" stroke=\"#1E1E1E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-cant-find-skill-dialog",
    "className": "CantFindSkillDialogComponent",
    "path": "pages/upload/my-skills-select/components/cant-find-skill-dialog/cant-find-skill-dialog.component.ts",
    "inputs": [],
    "snippet": "<section class=\"dialog\">\n  <div class=\"dialog__close\">\n    <button (click)=\"close()\" class=\"dialog__close-btn\">\n      <img src=\"assets/close-modal-icon.svg\" alt=\"close-modal-icon\" />\n    </button>\n  </div>"
  },
  {
    "selector": "app-card",
    "className": "CardComponent",
    "path": "pages/admin/onboarding/card/card.component.ts",
    "inputs": [],
    "snippet": "<div class=\"card\">\n  <h4 class=\"card__title\" contenteditable=\"true\" #cardTitle>\n    {{ card ? card.title : 'Card title' }}\n  </h4>\n\n  <div class=\"card__image\">"
  },
  {
    "selector": "app-card-image",
    "className": "CardImageComponent",
    "path": "shared/UIkit/card-image/card-image.component.ts",
    "inputs": [
      "image"
    ],
    "snippet": "@if (isImgSrc()) {\n  <img\n    width=\"100%\"\n    height=\"100%\"\n    [src]=\"image()\"\n  />"
  },
  {
    "selector": "app-case-icon",
    "className": "CaseIconComponent",
    "path": "shared/icons/case-icon/case-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\" fill=\"none\">\n  <g clip-path=\"url(#clip0_5980_5896)\">\n    <path d=\"M16.9725 21.2107V5.21069C16.9725 4.68026 16.7618 4.17155 16.3867 3.79648C16.0117 3.42141 15.503 3.21069 14.9725 3.21069H10.9725C10.4421 3.21069 9.93339 3.42141 9.55832 3.79648C9.18325 4.17155 8.97253 4.68026 8.97253 5.21069V21.2107M4.97253 7.21069H20.9725C22.0771 7.21069 22.9725 8.10612 22.9725 9.21069V19.2107C22.9725 20.3153 22.0771 21.2107 20.9725 21.2107H4.97253C3.86796 21.2107 2.97253 20.3153 2.97253 19.2107V9.21069C2.97253 8.10612 3.86796 7.21069 4.97253 7.21069Z\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </g>\n  <defs>\n    <clipPath id=\"clip0_5980_5896\">"
  },
  {
    "selector": "app-categories",
    "className": "CategoriesComponent",
    "path": "pages/admin/categories/categories.component.ts",
    "inputs": [],
    "snippet": "<div class=\"categories\">\n  <div class=\"categories__list\">\n    <h2 (click)=\"onCreateRequest()\" class=\"add-new\">+</h2>\n    <app-small-spinner [diameter]=\"30\" *ngIf=\"!categories\"></app-small-spinner>\n    <p\n      (click)=\"onSelect(category)\""
  },
  {
    "selector": "app-category-name",
    "className": "CategoryNameComponent",
    "path": "shared/model-based-components/category-name/category-name.component.ts",
    "inputs": [
      "categoryName"
    ],
    "snippet": ""
  },
  {
    "selector": "app-chat-confirmation-panel",
    "className": "ChatConfirmationPanelComponent",
    "path": "shared/components/chat-confirmation-panel/chat-confirmation-panel.component.ts",
    "inputs": [
      "options"
    ],
    "snippet": "<section class=\"panel\">\n  <div class=\"panel__content\">\n    @for(option of options(); track option.answer_id){\n      <button class=\"panel__btn panel__btn--confirm\" (click)=\"reply.emit(option)\">\n        @if(option.answer_id === 2){\n          <app-no-x-icon></app-no-x-icon>"
  },
  {
    "selector": "app-check-email-modal",
    "className": "CheckEmailModalComponent",
    "path": "auth/check-email-modal/check-email-modal.component.ts",
    "inputs": [],
    "snippet": "<app-mail-icon></app-mail-icon>\n<h2 class=\"check-email-title\">{{ 'check-email.check' | translate }}</h2>\n<span class=\"user-email\">{{ email() }}</span>\n<span class=\"login-link\"> {{'check-email.click-on' | translate }} <a (click)=\"goLogin()\">{{ 'link' | translate }}</a> {{ 'check-email.to-login' | translate }}</span>\n<app-button size=\"medium\" btnUIType=\"subtle\" (click)=\"resend()\"><span class=\"resend-text\">{{ 'check-email.resend' | translate }}</span></app-button>\n<div class=\"actions\">"
  },
  {
    "selector": "app-check-icon",
    "className": "CheckIconComponent",
    "path": "shared/icons/check-icon/check-icon.component.ts",
    "inputs": [
      "fill"
    ],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\">\n  <path d=\"M13.859 4L6.52572 11.3333L3.19238 8\" [attr.stroke]=\"fill()\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-chevron-down-icon",
    "className": "ChevronDownIconComponent",
    "path": "shared/icons/chevron-down-icon/chevron-down-icon.component.ts",
    "inputs": [
      "color",
      "strokeWidth"
    ],
    "snippet": "<svg\n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n>\n  <path"
  },
  {
    "selector": "app-chips-item",
    "className": "ChipsItemComponent",
    "path": "shared/UIkit/chips-item/chips-item.component.ts",
    "inputs": [
      "chipsItem",
      "isSelected"
    ],
    "snippet": "<div class=\"chips-item\"\n     [ngClass]=\"{\n      selected: isSelected()\n     }\"\n>\n  {{ (chipsItem().name) | translate }}"
  },
  {
    "selector": "app-click-to-copy",
    "className": "ClickToCopyComponent",
    "path": "shared/complex-ui-components/click-to-copy/click-to-copy.component.ts",
    "inputs": [
      "text",
      "copyBtnText"
    ],
    "snippet": "<div class=\"click-to-copy_content\">\n  {{ text() }}\n</div>\n\n<app-button\n  [size]=\"'small'\""
  },
  {
    "selector": "app-client-form",
    "className": "ClientFormComponent",
    "path": "pages/usersettings/components/client-form/client-form.component.ts",
    "inputs": [],
    "snippet": "@if (form()) {\n  <form [formGroup]=\"form()\" class=\"form\">\n    <div class=\"form__group\">\n      <div class=\"form__group--left\">\n        <h2 class=\"form-label\">\n          {{ formData()?.uploadAvatarLabel | translate }}"
  },
  {
    "selector": "app-close-card-button",
    "className": "CloseCardButtonComponent",
    "path": "shared/UIkit/buttons/close-card-button/close-card-button.component.ts",
    "inputs": [],
    "snippet": "<app-close-card-icon\n  class=\"close-icon\"\n></app-close-card-icon>\n\n<!--<app-icon-check-circle-->\n<!--  class=\"check-circle-icon\"-->"
  },
  {
    "selector": "app-close-card-icon",
    "className": "CloseCardIconComponent",
    "path": "shared/icons/close-card-icon/close-card-icon.component.ts",
    "inputs": [
      "color",
      "strokeWidth"
    ],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 17 17\" fill=\"none\">\n  <path d=\"M12.9987 4.30591L5.0332 12.2714\" [attr.stroke]=\"color()\"\n        [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <path d=\"M5.0332 4.30591L12.9987 12.2714\" [attr.stroke]=\"color()\"\n        [attr.stroke-width]=\"strokeWidth()\"stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-close-icon",
    "className": "CloseIconComponent",
    "path": "shared/icons/close-icon/close-icon.component.ts",
    "inputs": [],
    "snippet": "<svg viewBox=\"0 0 49 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M36.5 12L12.5 36M12.5 12L36.5 36\"\n    [attr.stroke]=\"color()\"\n    [attr.stroke-width]=\"strokeWidth()\"\n    stroke-linecap=\"round\""
  },
  {
    "selector": "app-collapse-button",
    "className": "CollapseButtonComponent",
    "path": "pages/profile/components/profile-info/collapse-button/collapse-button.component.ts",
    "inputs": [
      "collapsed"
    ],
    "snippet": "@if (collapsed()) {\n  <app-icon-chevrons-down\n    class=\"collapse-button_icon\"\n    color=\"{{chevronsColor}}\"\n  ></app-icon-chevrons-down>\n  <span"
  },
  {
    "selector": "app-coming-soon",
    "className": "ComingSoonComponent",
    "path": "shared/components/coming-soon/coming-soon.component.ts",
    "inputs": [],
    "snippet": "<div class=\"coming--soon\">\n  <div class=\"coming--soon__image--box\">\n    <img [src]=\"url\" alt=\"\" class=\"coming--soon__image--box__picture\" />\n  </div>\n  <p class=\"coming--soon__message--title\">{{ 'coming_soon.title' | translate }}</p>\n  <p class=\"coming--soon__message\" [ngStyle]=\"{ color: color }\">{{ text | translate }}</p>"
  },
  {
    "selector": "app-comment-field",
    "className": "CommentFieldComponent",
    "path": "pages/rateflow/flexfeedback/comment-field/comment-field.component.ts",
    "inputs": [],
    "snippet": "<div\n  class=\"feedback__container\"\n  [formGroup]=\"control\"\n  (click)=\"itemText.focus()\"\n  [ngClass]=\"{ 'feedback__container--colored': control.value.avratingparam_id }\"\n  [class]=\"'feedback__container--' + control.value.color\""
  },
  {
    "selector": "app-communities-icon",
    "className": "CommunitiesIconComponent",
    "path": "shared/icons/communities-icon/communities-icon.component.ts",
    "inputs": [],
    "snippet": "<svg viewBox=\"0 0 17 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M13.7234 9.66245C13.2775 9.66245 12.8649 9.80588 12.5267 10.0469L11.5404 9.06062C11.7213 8.78806 11.8271 8.46172 11.8271 8.1109C11.8271 7.76008 11.7213 7.43373 11.5404 7.16118L12.6013 6.10026C12.8739 6.2811 13.2002 6.38695 13.551 6.38695C14.5016 6.38695 15.275 5.61359 15.275 4.66301C15.275 3.71243 14.5016 2.93906 13.551 2.93906C12.6005 2.93906 11.8271 3.71243 11.8271 4.66301C11.8271 5.01383 11.933 5.34017 12.1138 5.61273L11.0529 6.67365C10.7803 6.4928 10.454 6.38695 10.1032 6.38695C9.76354 6.38695 9.44754 6.48694 9.18033 6.6571L7.23141 4.63612C7.51758 4.25978 7.68963 3.79207 7.68963 3.28385C7.68963 2.04813 6.68423 1.04272 5.4485 1.04272C4.21278 1.04272 3.20738 2.04813 3.20738 3.28385C3.20738 3.77742 3.36977 4.23288 3.64112 4.60353L2.74674 5.49792C2.57607 5.40534 2.38057 5.35259 2.17301 5.35259C1.50757 5.35259 0.966248 5.89391 0.966248 6.55935C0.966248 7.22479 1.50757 7.76611 2.17301 7.76611C2.83845 7.76611 3.37977 7.22479 3.37977 6.55935C3.37977 6.35179 3.32702 6.15629 3.23444 5.98562L4.12882 5.09124C4.49947 5.36259 4.95494 5.52498 5.4485 5.52498C5.92759 5.52498 6.37116 5.37259 6.73577 5.11554L8.68332 7.13515C8.49196 7.41287 8.37921 7.74887 8.37921 8.1109C8.37921 8.46172 8.48506 8.78806 8.6659 9.06062L7.60516 10.1214C7.33243 9.9407 7.00609 9.83484 6.65527 9.83484C5.70468 9.83484 4.93132 10.6082 4.93132 11.5588C4.93132 12.5094 5.70468 13.2827 6.65527 13.2827C7.60585 13.2827 8.37921 12.5094 8.37921 11.5588C8.37921 11.208 8.27336 10.8816 8.09252 10.6091L9.15326 9.54833C9.42599 9.72899 9.75233 9.83484 10.1032 9.83484C10.454 9.83484 10.7803 9.729 11.0529 9.54815L12.0391 10.5344C11.7981 10.8727 11.6547 11.2852 11.6547 11.7312C11.6547 12.8719 12.5827 13.7999 13.7234 13.7999C14.8642 13.7999 15.7922 12.8719 15.7922 11.7312C15.7922 10.5905 14.8642 9.66245 13.7234 9.66245ZM13.551 3.62864C14.1215 3.62864 14.5854 4.09256 14.5854 4.66301C14.5854 5.23346 14.1215 5.69738 13.551 5.69738C12.9806 5.69738 12.5167 5.23346 12.5167 4.66301C12.5167 4.09256 12.9806 3.62864 13.551 3.62864ZM2.17301 7.07653C1.88787 7.07653 1.65583 6.84449 1.65583 6.55935C1.65583 6.27421 1.88787 6.04217 2.17301 6.04217C2.45815 6.04217 2.69019 6.27421 2.69019 6.55935C2.69019 6.84449 2.45815 7.07653 2.17301 7.07653ZM3.89695 3.28385C3.89695 2.42843 4.59308 1.7323 5.4485 1.7323C6.30393 1.7323 7.00006 2.42843 7.00006 3.28385C7.00006 4.13927 6.30393 4.8354 5.4485 4.8354C4.59308 4.8354 3.89695 4.13927 3.89695 3.28385ZM6.65527 12.5932C6.08481 12.5932 5.6209 12.1292 5.6209 11.5588C5.6209 10.9883 6.08481 10.5244 6.65527 10.5244C7.22572 10.5244 7.68963 10.9883 7.68963 11.5588C7.68963 12.1292 7.22572 12.5932 6.65527 12.5932ZM9.06879 8.1109C9.06879 7.54045 9.5327 7.07653 10.1032 7.07653C10.6736 7.07653 11.1375 7.54045 11.1375 8.1109C11.1375 8.68135 10.6736 9.14527 10.1032 9.14527C9.5327 9.14527 9.06879 8.68135 9.06879 8.1109ZM13.7234 13.1103C12.963 13.1103 12.3443 12.4916 12.3443 11.7312C12.3443 10.9708 12.963 10.352 13.7234 10.352C14.4839 10.352 15.1026 10.9708 15.1026 11.7312C15.1026 12.4916 14.4839 13.1103 13.7234 13.1103Z\" fill=\"#1E1E1E\" [attr.stroke]=\"color()\"\n        [attr.stroke-width]=\"strokeWidth()\"/>\n</svg>"
  },
  {
    "selector": "app-complete-flag-icon",
    "className": "CompleteFlagIconComponent",
    "path": "shared/icons/complete-flag-icon/complete-flag-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\">\n  <path d=\"M3.57197 1.39524C3.57197 0.78728 3.07912 0.294434 2.47116 0.294434C1.86321 0.294434 1.37036 0.78728 1.37036 1.39524V14.6049C1.37036 15.2128 1.86321 15.7057 2.47116 15.7057C3.07912 15.7057 3.57197 15.2128 3.57197 14.6049V1.39524Z\" fill=\"#F3F3F3\"/>\n  <path d=\"M7.42501 1.58211V3.77824C6.65435 3.66825 5.75726 3.59663 4.6731 3.59663V1.39502C5.76842 1.39502 6.65454 1.46665 7.42501 1.58211Z\" fill=\"#F3F3F3\"/>\n  <path d=\"M4.67285 4.69751C5.77913 4.69751 6.65978 4.77462 7.42476 4.89008V7.08073C6.6541 6.97074 5.75702 6.89912 4.67285 6.89912V4.69751Z\" fill=\"#F3F3F3\"/>\n  <path d=\"M4.67285 8C5.77913 8 6.65978 8.07711 7.42476 8.19257V10.3887C6.6541 10.273 5.76798 10.2016 4.67285 10.2016V8Z\" fill=\"#F3F3F3\"/>\n  <path d=\"M10.0225 8.80352C10.5894 8.96868 11.1728 9.13385 11.8278 9.27143V11.4621C10.6499 11.1979 9.7033 10.8566 8.52539 10.5924V8.40723C9.0483 8.52288 9.53265 8.66046 10.0225 8.80352Z\" fill=\"#F3F3F3\"/>"
  },
  {
    "selector": "app-conditions",
    "className": "ConditionsComponent",
    "path": "pages/organization-invitation/components/conditions/conditions.component.ts",
    "inputs": [],
    "snippet": "<div class=\"conditions_text-container\">\n  <div class=\"conditions_text-content\">\n    @if (invitation()) {\n      <h6 class=\"conditions_text-content-title\">{{ 'organization-invitations-conditions.join_organization' | translate: invitation() }}</h6>\n    } @else {\n      <h6 class=\"conditions_text-content-title\">{{ 'organization-invitations-conditions.confirm-invite' | translate }}</h6>"
  },
  {
    "selector": "app-confirm",
    "className": "ConfirmComponent",
    "path": "auth/confirm/confirm.component.ts",
    "inputs": [],
    "snippet": "<div class=\"confirmation\">\n  <svg class=\"confirmation__logo\">\n    <use\n      [attr.xlink:href]=\"\n        'assets/emoji-neck-defs.svg#icon-Emoji-anim-fill-neck_80'\n      \""
  },
  {
    "selector": "app-confirm-dialog",
    "className": "ConfirmDialogComponent",
    "path": "shared/components/confirm-dialog/confirm-dialog.component.ts",
    "inputs": [],
    "snippet": "<div class=\"modal__container\">\n  <button mat-icon-button mat-dialog-close class=\"modal__btn--close\">\n    <img src=\"assets/close-modal-icon.svg\" alt=\"{{ 'payout_request.cancel_dialog.close_img_alt' | translate }}\" />\n  </button>\n\n  <div class=\"modal__body\">"
  },
  {
    "selector": "app-confirm-modal",
    "className": "ConfirmModalComponent",
    "path": "auth/confirmreset/confirm-modal/confirm-modal.component.ts",
    "inputs": [],
    "snippet": "<div class=\"modal-header\">\n  <h2 mat-dialog-title>{{ 'reset-password.title' | translate }}</h2> <app-close-icon strokeWidth=\"3\" (click)=\"close()\"></app-close-icon>\n</div>\n\n<mat-dialog-content >\n  <div class=\"input-form-control\">"
  },
  {
    "selector": "app-confirm-modal",
    "className": "ConfirmModalComponent",
    "path": "shared/components/confirm-modal/confirm-modal.component.ts",
    "inputs": [],
    "snippet": "<section class=\"confirmation-dialog\">\n  <article class=\"header-container\">\n    <h1 class=\"title\">{{ data.title | translate }}</h1>\n    <app-button\n      size=\"large\"\n      btnUIType=\"subtle\""
  },
  {
    "selector": "app-confirm-token",
    "className": "ConfirmTokenComponent",
    "path": "pages/confirm-token/confirm-token.component.ts",
    "inputs": [],
    "snippet": ""
  },
  {
    "selector": "app-confirmation-message",
    "className": "ConfirmationMessageComponent",
    "path": "shared/complex-ui-components/confirmation-message/confirmation-message.component.ts",
    "inputs": [],
    "snippet": "<div class=\"confirmation-message\">\n  <app-button-close\n    class=\"confirmation-message_close-icon_btn\"\n    (click)=\"close()\"\n  ></app-button-close>\n  <div>"
  },
  {
    "selector": "app-confirmreset",
    "className": "ConfirmresetComponent",
    "path": "auth/confirmreset/confirmreset.component.ts",
    "inputs": [],
    "snippet": ""
  },
  {
    "selector": "app-contact-icon",
    "className": "ContactIconComponent",
    "path": "shared/icons/contact-icon/contact-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  width=\"25\"\n  height=\"26\"\n  viewBox=\"0 0 25 26\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\""
  },
  {
    "selector": "app-contact-us",
    "className": "ContactUsComponent",
    "path": "pages/contact-us/contact-us.component.ts",
    "inputs": [],
    "snippet": "<div class=\"contact-us\">\n  <div class=\"contact-us__card support-card\" [formGroup]=\"contactUsFormGroup\">\n    <div class=\"image-container\">\n      <img class=\"contact-us__card--header\" src=\"assets/support-card@2x.svg\" />\n      <h2 class=\"contact-us__card--title\">{{ 'contact_us_card.title' | translate }}</h2>\n    </div>"
  },
  {
    "selector": "app-content-editable-field",
    "className": "ContentEditableFieldComponent",
    "path": "shared/components/content-editable-field/content-editable-field.component.ts",
    "inputs": [],
    "snippet": "<textarea\n  class=\"content-editable-field\"\n  cdkTextareaAutosize\n  (keydown.enter)=\"$event.preventDefault()\"\n  [placeholder]=\"placeHolder\"\n  [maxlength]=\"maxLength\""
  },
  {
    "selector": "app-conversation",
    "className": "ConversationComponent",
    "path": "pages/conversation/layout/conversation.component.ts",
    "inputs": [],
    "snippet": "<div class=\"conversation full-width\">\n  @if ((isDesktop$ | async)) {\n    <div class=\"conversation__animation-container\">\n      <div class=\"conversation__messages\" [@slide]=\"activePane\">\n        <app-conversation-detail\n          [conversation]=\"conversation\""
  },
  {
    "selector": "app-conversation-detail",
    "className": "ConversationDetailComponent",
    "path": "pages/conversation/conversation-detail/conversation-detail.component.ts",
    "inputs": [
      "activeConversationPartners",
      "activeConversationRater",
      "showChatHeading",
      "showFinishQuestionnaireButton",
      "anonUser",
      "isInternal"
    ],
    "snippet": "@if (currentUser() &&\nconversation) {\n  <div\n    class=\"chat\"\n    [ngClass]=\"{internal: isInternal()}\"\n  >"
  },
  {
    "selector": "app-conversation-filter-item",
    "className": "ConversationFilterItemComponent",
    "path": "shared/components/conversation-filter-item/conversation-filter-item.component.ts",
    "inputs": [
      "mentions",
      "messages",
      "scheduled"
    ],
    "snippet": "<div class=\"filter-container\">\n  <div class=\"counters\">\n  @if(scheduled() > 0) {\n\n    <div class=\"counter\">\n      <app-calendar-icon color=\"#757575\" class=\"icon\"></app-calendar-icon>"
  },
  {
    "selector": "app-conversation-header",
    "className": "ConversationHeaderComponent",
    "path": "pages/conversation/components/conversation-header/conversation-header.component.ts",
    "inputs": [
      "conversation",
      "activeConversationRater",
      "activeConversationPartners",
      "isOwnerOfIceBreaker",
      "paymentSessionOpened",
      "isVideoCallRequested",
      "companionTypeName"
    ],
    "snippet": "<div class=\"chat__header\">\n  <div class=\"left-block\">\n    <a\n      routerLink=\"\"\n      class=\"chat__header--back-link\"\n      (click)=\"navigateBackClickHandler()\""
  },
  {
    "selector": "app-conversation-image",
    "className": "ConversationImageComponent",
    "path": "shared/model-based-components/conversation-image/conversation-image.component.ts",
    "inputs": [
      "images"
    ],
    "snippet": "@for (image of imagesList(); track image.zIndex) {\n  <img\n    [ngStyle]=\"{'z-index': image.zIndex}\"\n    src=\"{{ image.src }}\"\n    alt=\"{{ image.alt | translate }}\"\n  />"
  },
  {
    "selector": "app-conversation-item",
    "className": "ConversationItemComponent",
    "path": "pages/conversations/components/conversation-item/conversation-item.component.ts",
    "inputs": [],
    "snippet": "<div class=\"conversation\">\n  <div class=\"conversation__header\">\n    <div\n      class=\"conversation__badge\"\n      *ngIf=\"conversation.sum_awaiting && conversation.lastmeetingfinished\"\n    >"
  },
  {
    "selector": "app-conversation-manage-panel",
    "className": "ConversationManagePanelComponent",
    "path": "pages/conversation/components/conversation-manage-panel/conversation-manage-panel.component.ts",
    "inputs": [
      "activeConversationPartners",
      "activeConversationRater",
      "conversation",
      "currentUser",
      "internalConversationId"
    ],
    "snippet": "<section class=\"conversation-manage-panel\">\n  <div class=\"manage-menu\">\n    <div class=\"manage-menu-wrapper\">\n      @for(item of itemMainMenu(); track item.id ) {\n      <div class=\"manage-menu-item\" role=\"button\" [ngClass]=\"[(selected() === item.id ? 'selected': ''), item.id]\"\n        (click)=\"selectConversationMenu(item.id)\">"
  },
  {
    "selector": "app-conversation-menu",
    "className": "ConversationMenuComponent",
    "path": "pages/conversation/components/conversation-menu/conversation-menu.component.ts",
    "inputs": [
      "conversation",
      "isVideoCallRequested"
    ],
    "snippet": "<app-conversation-request-more-button\n  #triger\n  [disable]=\"isDisable()\"\n  (click)=\"toggleMenu()\"\n></app-conversation-request-more-button>\n"
  },
  {
    "selector": "app-conversation-menu-item",
    "className": "ConversationMenuItemComponent",
    "path": "pages/conversation/components/conversation-menu-item/conversation-menu-item.component.ts",
    "inputs": [
      "onlyIconMenu",
      "item"
    ],
    "snippet": "@if (item()) {\n  <div class=\"item\">\n    <div class=\"item-icon\">\n      <ng-container *ngComponentOutlet=\"item().icon; inputs: item().inputs\"></ng-container>\n    </div>\n    @if(!onlyIconMenu()) {"
  },
  {
    "selector": "app-conversation-message",
    "className": "ConversationMessageComponent",
    "path": "ice-breaker/modules/ice-breaker-template/components/converstation-message/conversation-message.component.ts",
    "inputs": [],
    "snippet": "<ng-container *ngIf=\"!rawMessage.isOwner; else author\">\n  <img\n    src=\"assets/conversations/robot.svg\"\n    class=\"user-avatar\"\n    alt=\"Robot avatar\"\n  />"
  },
  {
    "selector": "app-conversation-request-more-button",
    "className": "ConversationRequestMoreButtonComponent",
    "path": "pages/conversation/components/conversation-request-more-button/conversation-request-more-button.component.ts",
    "inputs": [
      "disable"
    ],
    "snippet": "<app-button\n  class=\"conversation-request-more-button\"\n  size=\"medium\"\n  btnUIType=\"subtle\"\n  [disabled]=\"disable()\"\n>"
  },
  {
    "selector": "app-conversation-row",
    "className": "ConversationRowComponent",
    "path": "pages/conversations/components/conversation-row/conversation-row.component.ts",
    "inputs": [
      "conversation",
      "type",
      "currentUser"
    ],
    "snippet": "<a class=\"conversation-item\" [routerLink]=\"['/conversations', conversation().id]\">\n  <div class=\"conversation-user\">\n    <app-conversation-users\n      [conversation]=\"conversation()\"\n      [conversationPartner]=\"conversationPartner()\"\n      [currentUserId]=\"currentUser().id\""
  },
  {
    "selector": "app-conversation-type",
    "className": "ConversationTypeComponent",
    "path": "pages/conversations/components/conversation-type/conversation-type.component.ts",
    "inputs": [
      "type"
    ],
    "snippet": "<span class=\"conversation-tag\" [ngClass]=\"getTypeClass(type())\">\n  @switch (type()) {\n    @case (types().COMMUNITY_CHAT) {\n      <app-communities-icon class=\"icon\" color=\"black\" strokeWidth=\"0.7\"></app-communities-icon>\n      {{ 'conversation_types.community_chat' | translate }}\n    }"
  },
  {
    "selector": "app-conversation-users",
    "className": "ConversationUsersComponent",
    "path": "shared/components/conversation-users/conversation-users.component.ts",
    "inputs": [
      "members",
      "conversationPartner",
      "currentUserId",
      "conversationImage",
      "name",
      "conversation",
      "type"
    ],
    "snippet": "@if(conversation()) {\n  <div class=\"conversation-info\">\n\n    @switch (type()) {\n      @case (types().DIRECT_CHAT) {\n        <div class=\"conversation-info__img-container direct\">"
  },
  {
    "selector": "app-conversations",
    "className": "ConversationsComponent",
    "path": "pages/conversations/layout/conversations.component.ts",
    "inputs": [],
    "snippet": "<app-filter-panel [currentUser]=\"currentUser\" (filterChanged)=\"handleFilterChange($event)\" (selectedEntity)=\"handleSelectedEntities($event)\"\n                  (newConversation)=\"addNewConversation($event)\"></app-filter-panel>\n\n<div class=\"activity-container\">\n  @if (currentUser) {\n    <div"
  },
  {
    "selector": "app-conversations-icon",
    "className": "ConversationsIconComponent",
    "path": "shared/icons/conversations-icon/conversations-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\" fill=\"none\">\n  <g clip-path=\"url(#clip0_6199_14956)\">\n    <path d=\"M20.2895 16.1066C20.2757 16.0191 20.2817 15.9297 20.3073 15.8446C20.3329 15.7595 20.3774 15.6807 20.4378 15.6135C20.4981 15.5464 20.573 15.4925 20.6571 15.4556C20.7412 15.4187 20.8327 15.3995 20.9253 15.3996H22.2621C22.3692 15.3995 22.4719 15.3588 22.5476 15.2864C22.6234 15.2139 22.666 15.1157 22.6661 15.0133V5.78183C22.666 5.6794 22.6234 5.5812 22.5476 5.50878C22.4719 5.43637 22.3692 5.39566 22.2621 5.39558H20.7512V4.16533H22.4559C22.904 4.16579 23.3336 4.33624 23.6504 4.63929C23.9673 4.94234 24.1455 5.35324 24.146 5.78183V15.2524C24.1455 15.681 23.9673 16.0919 23.6504 16.395C23.3336 16.698 22.904 16.8685 22.4559 16.8689H21.6729L22.4074 21.516C22.4272 21.6407 22.4063 21.7682 22.3478 21.8812C22.2892 21.9941 22.1958 22.0872 22.0802 22.1477C21.9645 22.2082 21.8322 22.2332 21.7011 22.2194C21.5701 22.2056 21.4467 22.1535 21.3476 22.0704L15.1475 16.8689H8.70849L10.1813 15.4608H15.3958C15.5518 15.4608 15.7025 15.5151 15.8198 15.6135L20.8728 20.0355L20.2895 16.1066ZM0.727539 12.5505V2.84615C0.728028 2.41101 0.908941 1.99383 1.23059 1.68612C1.55224 1.37841 1.98836 1.2053 2.44327 1.20477H17.7342C18.1892 1.20525 18.6254 1.37834 18.9471 1.68605C19.2688 1.99376 19.4497 2.41097 19.4502 2.84615V12.5505C19.4497 12.9857 19.2688 13.4029 18.9471 13.7106C18.6254 14.0184 18.1892 14.1914 17.7342 14.1919H9.92672L3.56794 19.5254C3.46883 19.6085 3.34542 19.6605 3.21441 19.6743C3.08339 19.6881 2.95111 19.6631 2.83546 19.6026C2.71982 19.5421 2.6264 19.4491 2.56784 19.3361C2.50929 19.2232 2.48843 19.0958 2.50809 18.9711L3.2622 14.1919H2.44327C1.98835 14.1914 1.55224 14.0183 1.23059 13.7106C0.908939 13.4029 0.728027 12.9857 0.727539 12.5505ZM2.19887 12.3271C2.19896 12.4361 2.24423 12.5406 2.32477 12.6177C2.4053 12.6948 2.51451 12.7381 2.62844 12.7383H4.00981C4.10238 12.7382 4.19386 12.7573 4.278 12.7943C4.36215 12.8312 4.43696 12.885 4.49733 12.9522C4.5577 13.0193 4.60221 13.0981 4.6278 13.1832C4.65339 13.2683 4.65947 13.3576 4.64562 13.4452L4.17917 17.0711L9.26077 12.8909C9.3781 12.7925 9.5288 12.7383 9.68481 12.7383L17.4934 12.7383C17.6073 12.7381 17.7166 12.6948 17.7972 12.6177C17.8777 12.5406 17.9231 12.4361 17.9232 12.3271V3.25725C17.9231 3.14825 17.8777 3.04377 17.7971 2.9667C17.7166 2.88963 17.6073 2.84627 17.4934 2.84613L2.62844 2.84615C2.51451 2.8463 2.40531 2.88967 2.32477 2.96674C2.24424 3.04381 2.19896 3.1483 2.19887 3.25727V12.3271Z\" [attr.fill]=\"fill()\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\"/>\n  </g>\n  <defs>\n    <clipPath id=\"clip0_6199_14956\">"
  },
  {
    "selector": "app-cookie-notification",
    "className": "CookieNotificationComponent",
    "path": "shared/components/cookie-notification/cookie-notification.component.ts",
    "inputs": [],
    "snippet": "<div class=\"cn__wrapper\">\n  <div class=\"cn__text\" [smoothHeight]=\"showMore\">\n    <span\n      >Your data security and privacy is deadly important to us. All your\n      temporary actions on our website will be deleted once you close\n      Getme.Global.</span"
  },
  {
    "selector": "app-counsellor-desk",
    "className": "CounsellorDeskComponent",
    "path": "pages/counsellor-desk/counsellor-desk/counsellor-desk.component.ts",
    "inputs": [],
    "snippet": "<div class=\"counsellor-desk\">\n  <div class=\"counsellor-desk_expertise-card\">\n    @for (filter of filterService.skillFilters(); track filter.id) {\n      <app-expertise-card\n        [skill]=\"filter\"\n        (close)=\"filterService.remove(filter)\""
  },
  {
    "selector": "app-counsellor-desk-icon",
    "className": "CounsellorDeskIconComponent",
    "path": "shared/icons/counsellor-desk-icon/counsellor-desk-icon.component.ts",
    "inputs": [
      "color"
    ],
    "snippet": "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M7.55976 6.55473H9.27442V8.30474C9.27442 8.53771 9.42082 8.74424 9.64054 8.82171L9.6428 8.82248C9.69863 8.84158 9.75958 8.85316 9.82285 8.85316C9.98655 8.85316 10.1437 8.77985 10.2494 8.64894L10.2495 8.64887L11.9388 6.55473H19.9104C20.2132 6.55473 20.4588 6.30911 20.4588 6.00628V0.953258C20.4588 0.649524 20.2123 0.40566 19.9104 0.405651C19.9104 0.405651 19.9104 0.405651 19.9104 0.405651L7.55978 0.40481H7.55976C7.25695 0.40481 7.01132 0.650425 7.01132 0.953255V6.00628C7.01132 6.30909 7.25693 6.55473 7.55976 6.55473ZM11.677 5.45786H11.6769C11.5133 5.45786 11.3545 5.53136 11.2498 5.66283L10.3713 6.75153V6.0063C10.3713 5.70349 10.1257 5.45786 9.82286 5.45786H8.10821V1.50082H19.3629V5.45948L11.677 5.45786Z\"\n    [attr.fill]=\"color()\"\n    [attr.stroke]=\"color()\"\n    stroke-width=\"0.514478\" />"
  },
  {
    "selector": "app-counselors-vertical-carousel",
    "className": "CounselorsVerticalCarouselComponent",
    "path": "pages/organizations/components/counselors-vertical-carousel/counselors-vertical-carousel.component.ts",
    "inputs": [
      "counselors",
      "shownCardsNumber",
      "cardHeight",
      "gap"
    ],
    "snippet": "<div class=\"counselors-carousel\">\n  @if (allowSlidesNav()) {\n    <div class=\"counselors-carousel__btn\" [style.opacity]=\"scrolledSlides() === 0 ? 0 : 1\">\n      <app-button\n        type=\"button\"\n        iconBtn"
  },
  {
    "selector": "app-cover-image",
    "className": "CoverImageComponent",
    "path": "shared/UIkit/cover-image/cover-image.component.ts",
    "inputs": [
      "image"
    ],
    "snippet": "@if (image().src) {\n  <img\n    class=\"cover-image\"\n    [src]=\"image().src\"\n    [alt]=\"image().alt\"\n  />"
  },
  {
    "selector": "app-create-capsule-modal",
    "className": "CreateCapsuleModalComponent",
    "path": "ice-breaker/modules/create-capsule-modal/create-capsule-modal.component.ts",
    "inputs": [],
    "snippet": "<div class=\"modal-header\">\n  <app-close-icon (click)=\"close()\"></app-close-icon>\n</div>\n<h2 class=\"modal-title\" mat-dialog-title>{{ 'modal.title' | translate }}</h2>\n<mat-dialog-content>\n  <p class=\"create-capsule-text\" [innerHTML]=\"'modal.text' | translate:{"
  },
  {
    "selector": "app-create-org",
    "className": "CreateOrgComponent",
    "path": "pages/usersettings/sections/create-org/create-org.component.ts",
    "inputs": [],
    "snippet": "<div class=\"create-org-container\">\n  <app-section-header [title]=\"'create_organization_title' | translate\">\n    <app-organization-icon></app-organization-icon>\n  </app-section-header>\n\n  @if (organization()) {"
  },
  {
    "selector": "app-creatives",
    "className": "CreativesComponent",
    "path": "pages/creatives/layout/creatives.component.ts",
    "inputs": [],
    "snippet": "<div class=\"creatives\">\n  <div class=\"search-bar\" *ngIf=\"isSmallScreen\">\n    <app-search-bar></app-search-bar>\n  </div>\n\n  <app-search-results *ngIf=\"selectedCategories?.length\"></app-search-results>"
  },
  {
    "selector": "app-creatives-info-card",
    "className": "CreativesInfoCardComponent",
    "path": "pages/creatives/creatives-info-card/creatives-info-card.component.ts",
    "inputs": [],
    "snippet": "<div\n  class=\"info-card\"\n  [ngClass]=\"{\n    'info-card--locked': isLocked,\n    'info-card--unsigned': !currentUser,\n  }\""
  },
  {
    "selector": "app-creatives-project-card",
    "className": "CreativesProjectCardComponent",
    "path": "pages/creatives/creatives-project-card/creatives-project-card.component.ts",
    "inputs": [],
    "snippet": "<div\n  class=\"disabled\"\n  *ngIf=\"currentUser && disabled\"\n  (click)=\"openModal()\"\n></div>\n<div class=\"card\">"
  },
  {
    "selector": "app-creatives-warning-modal",
    "className": "CreativesWarningModalComponent",
    "path": "pages/creatives/creatives-warning-modal/creatives-warning-modal.component.ts",
    "inputs": [],
    "snippet": "<div class=\"modal creatives-modal\">\n  <button mat-icon-button mat-dialog-close class=\"modal__btn--close\">\n    <img src=\"assets/close-modal-icon.svg\" alt=\"close-modal-icon\" />\n  </button>\n\n  <app-rateback-selector"
  },
  {
    "selector": "app-crop-image",
    "className": "CropImageComponent",
    "path": "shared/components/crop-image/crop-image.component.ts",
    "inputs": [],
    "snippet": "<div class=\"crop-modal\">\n  <div class=\"header\">\n    <h2 class=\"title\">Crop the AREA you wish to emphasize on</h2>\n    <app-button btnUIType=\"primary\" size=\"medium\" [mat-dialog-close]=\"croppedImage\">\n      save\n    </app-button>"
  },
  {
    "selector": "app-curves",
    "className": "CurvesComponent",
    "path": "shared/components/curves/curves.component.ts",
    "inputs": [],
    "snippet": "@if(isAudio) {\n  <div class=\"curves--audio-line\">\n    <span class=\"curves--audio-line-point top\">+5</span>\n    <span class=\"curves--audio-line-point center\">0</span>\n    <span class=\"curves--audio-line-point bottom\">-5</span>\n  </div>"
  },
  {
    "selector": "app-data-deletion-instructions",
    "className": "DataDeletionInstructionsComponent",
    "path": "pages/data-deletion-instructions/data-deletion-instructions.component.ts",
    "inputs": [],
    "snippet": "<div class=\"data-deletion\">\n  <h1 class=\"header-title\">{{ 'title' | translate }}</h1>\n\n  <p>{{ 'intro' | translate }}</p>\n\n  <h2 class=\"heading\">{{ 'how_heading' | translate }}</h2>"
  },
  {
    "selector": "app-default-message",
    "className": "DefaultMessageComponent",
    "path": "shared/model-based-components/conversation-messages/default-message/default-message.component.ts",
    "inputs": [
      "message",
      "direction",
      "isInternalChat"
    ],
    "snippet": "<div class=\"message-content\" [@messageAnimation] [ngClass]=\"[(direction() === 'left' ? 'message-content--left' : 'message-content--right'), isInternalChat() ? 'internal' : '']\">\n  <section class=\"user-avatar\">\n    <ng-container\n      *ngIf=\"\n        isAuthor &&\n        canReply &&"
  },
  {
    "selector": "app-delete-icon",
    "className": "DeleteIconComponent",
    "path": "shared/icons/delete-icon/delete-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n>\n  <path\n    d=\"M2.5 5.00002H4.16667M4.16667 5.00002H17.5M4.16667 5.00002L4.16667 16.6667C4.16667 17.1087 4.34226 17.5326 4.65482 17.8452C4.96738 18.1578 5.39131 18.3334 5.83333 18.3334H14.1667C14.6087 18.3334 15.0326 18.1578 15.3452 17.8452C15.6577 17.5326 15.8333 17.1087 15.8333 16.6667V5.00002M6.66667 5.00002V3.33335C6.66667 2.89133 6.84226 2.4674 7.15482 2.15484C7.46738 1.84228 7.89131 1.66669 8.33333 1.66669H11.6667C12.1087 1.66669 12.5326 1.84228 12.8452 2.15484C13.1577 2.4674 13.3333 2.89133 13.3333 3.33335V5.00002M8.33333 9.16669V14.1667M11.6667 9.16669V14.1667\""
  },
  {
    "selector": "app-desktop-header",
    "className": "DesktopHeaderComponent",
    "path": "shared/components/desktop-header/desktop-header.component.ts",
    "inputs": [
      "title",
      "subtitle"
    ],
    "snippet": "<h2 class=\"get-help__title\">{{ title() }}</h2>\n<span class=\"get-help__subtitle\" [innerHTML]=\"subtitle()\"></span>"
  },
  {
    "selector": "app-disappointed-icon",
    "className": "DisappointedIconComponent",
    "path": "shared/icons/disappointed-icon/disappointed-icon.component.ts",
    "inputs": [
      "active"
    ],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"30\" viewBox=\"0 0 32 30\" fill=\"none\" [ngClass]=\"{'active': active()}\">\n  <g clip-path=\"url(#clip0_6765_4308)\">\n    <path d=\"M25.4596 5.15319C22.8776 2.56833 19.435 1.2041 15.7772 1.2041C12.0476 1.2041 8.53324 2.64013 5.95124 5.29679C0.57209 10.7537 0.643812 19.5135 6.09469 24.8268C8.67668 27.4117 12.1193 28.7759 15.7772 28.7759H15.8489C19.5784 28.7759 23.0211 27.2681 25.6031 24.6832C30.9105 19.2981 30.8388 10.4665 25.4596 5.15319ZM24.5273 23.678C22.1604 26.0474 19.0764 27.3399 15.7054 27.3399C12.4062 27.3399 9.32218 26.0474 7.02707 23.7498C2.14997 19.0109 2.14997 11.1127 6.95535 6.30201C9.25046 3.93256 12.4062 2.64013 15.7054 2.64013H15.7772C19.0764 2.64013 22.1604 3.93256 24.4555 6.23021C29.3326 10.9691 29.3326 18.7955 24.5273 23.678Z\" fill=\"#1E1E1E\" stroke=\"#1E1E1E\" stroke-width=\"0.684619\" stroke-miterlimit=\"10\"/>\n    <path d=\"M15.7772 17.9341C13.9841 17.9341 12.3345 18.7239 11.187 20.0881C11.0435 20.2317 10.9718 20.4471 11.0435 20.5907C11.0435 20.8061 11.1152 20.9497 11.2587 21.0933C11.4021 21.237 11.6173 21.237 11.689 21.237C11.9042 21.237 12.1193 21.1652 12.2628 21.0215C13.1235 20.0163 14.4145 19.4419 15.7772 19.4419C17.1399 19.4419 18.4309 20.0163 19.2916 20.9497C19.435 21.0934 19.6502 21.1652 19.7936 21.1652C19.937 21.1652 20.0805 21.1652 20.2957 20.9497C20.4391 20.8061 20.5108 20.6625 20.5108 20.4471C20.5108 20.2317 20.4391 20.0881 20.3674 19.9445C19.2198 18.6521 17.5702 17.9341 15.7772 17.9341Z\" fill=\"#1E1E1E\"/>\n    <path d=\"M12.5498 14.4874C12.6932 14.4874 12.8367 14.4156 12.9801 14.272C13.1953 14.0566 13.1953 13.6976 12.9801 13.4822L12.1194 12.6924L11.5457 12.1897L12.1194 11.6871L12.9801 10.8973C13.1235 10.8255 13.1235 10.6819 13.1235 10.4665C13.1235 10.3229 13.0518 10.1793 12.9801 10.0357C12.8367 9.89209 12.6932 9.89209 12.5498 9.89209C12.4063 9.89209 12.2629 9.96389 12.1194 10.0357L11.1871 10.8973L10.685 11.3999L10.2547 10.9691L9.32228 10.1075C9.25056 10.0357 9.10711 9.96389 8.96367 9.96389C8.82022 9.96389 8.67678 10.0357 8.53334 10.1793C8.46162 10.3229 8.38989 10.4665 8.38989 10.6101C8.38989 10.7537 8.46161 10.8973 8.60506 11.0409L9.46572 11.8307L10.0395 12.3333L9.46572 12.836L8.60506 13.6258C8.38989 13.8412 8.38989 14.2002 8.60506 14.4156C8.7485 14.5592 8.89195 14.5592 9.03539 14.5592C9.17884 14.5592 9.32228 14.4874 9.46572 14.4156L10.3981 13.554L10.9002 13.0514L11.4022 13.4822L12.3346 14.3438C12.2629 14.4156 12.4063 14.4874 12.5498 14.4874Z\" fill=\"#1E1E1E\"/>\n    <path d=\"M22.2323 12.6205L21.6585 12.1179L22.2323 11.6153L23.0929 10.8255C23.3081 10.6101 23.3081 10.2511 23.0929 10.0357C22.9495 9.89209 22.8061 9.89209 22.6626 9.89209C22.5192 9.89209 22.3757 9.96389 22.2323 10.0357L21.2999 10.8973L20.7978 11.3999L20.2958 10.8973L19.3634 10.0357C19.2917 9.96389 19.1482 9.89209 19.0048 9.89209C18.8613 9.89209 18.7179 9.96389 18.5745 10.1075C18.3593 10.3229 18.3593 10.6819 18.5745 10.8973L19.4351 11.6871L20.0089 12.1897L19.4351 12.6924L18.5745 13.4822C18.3593 13.6976 18.3593 14.0566 18.5745 14.272C18.7179 14.4156 18.8613 14.4156 19.0048 14.4156C19.1482 14.4156 19.2917 14.3438 19.4351 14.272L20.3675 13.4104L20.8696 12.9078L21.3716 13.3386L22.304 14.2002C22.3757 14.272 22.5192 14.3438 22.6626 14.3438C22.8061 14.3438 22.9495 14.272 23.0929 14.1284C23.3081 13.913 23.3081 13.554 23.0929 13.3386L22.2323 12.6205Z\" fill=\"#1E1E1E\"/>"
  },
  {
    "selector": "app-dollar-icon",
    "className": "DollarIconComponent",
    "path": "shared/icons/dollar-icon/dollar-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  width=\"24\"\n  height=\"25\"\n  viewBox=\"0 0 24 25\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\""
  },
  {
    "selector": "app-download-icon",
    "className": "DownloadIconComponent",
    "path": "shared/icons/download-icon/download-icon.component.ts",
    "inputs": [],
    "snippet": "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15\"\n    [attr.stroke]=\"color()\"\n    [attr.stroke-width]=\"strokeWidth()\"\n    stroke-linecap=\"round\""
  },
  {
    "selector": "app-drag-handle-icon",
    "className": "DragHandleIconComponent",
    "path": "shared/icons/drag-handle-icon/drag-handle-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  width=\"49\"\n  height=\"121\"\n  viewBox=\"0 0 49 121\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\""
  },
  {
    "selector": "app-drag-n-drop-grid",
    "className": "DragNDropGridComponent",
    "path": "pages/upload/drag-n-drop-grid/drag-n-drop-grid.component.ts",
    "inputs": [],
    "snippet": "<div class=\"files-container\" cdkDropListGroup>\n  <div\n    cdkDropList\n    [cdkDropListEnterPredicate]=\"dropListEnterPredicate\"\n    (cdkDropListDropped)=\"dropListDropped($event)\"\n  ></div>"
  },
  {
    "selector": "app-drag-n-drop-grid-item",
    "className": "DragNDropGridItemComponent",
    "path": "pages/upload/drag-n-drop-grid/drag-n-drop-grid-item/drag-n-drop-grid-item.component.ts",
    "inputs": [],
    "snippet": "<div\n  cdkDrag\n  class=\"file-preview__file-list-item\"\n  #itemRef\n  (cdkDragMoved)=\"dragMoved.emit($event)\"\n>"
  },
  {
    "selector": "app-drag-slider-modal",
    "className": "DragSliderModalComponent",
    "path": "pages/rateflow/drag-slider-modal/drag-slider-modal.component.ts",
    "inputs": [],
    "snippet": "<div class=\"modal__header\">\n  <span class=\"modal__header--title\">Share this Capsule / Questionnaire</span>\n  <app-close-icon mat-dialog-close></app-close-icon>\n</div>\n<div class=\"modal__container\">\n  <div class=\"modal__body\">"
  },
  {
    "selector": "app-draw",
    "className": "DrawComponent",
    "path": "pages/rateflow/draw/draw.component.ts",
    "inputs": [],
    "snippet": "<div class=\"draw\" #drawRef [ngClass]=\"{ mobile: isMobile }\">\n  <canvas #canvasRef></canvas>\n\n  <div class=\"actions\">\n    <button\n      class=\"action\""
  },
  {
    "selector": "app-dropdown-list",
    "className": "DropdownListComponent",
    "path": "shared/complex-ui-components/dropdown-list/dropdown-list.component.ts",
    "inputs": [],
    "snippet": "<ul>\n  @for (item of items(); track item.param) {\n    <app-dropdown-list-item\n      [menuItem]=\"item\"\n      [disabled]=\"isDisabled(item)\"\n      [selected]=\"isSelected(item)\""
  },
  {
    "selector": "app-dropdown-list-item",
    "className": "DropdownListItemComponent",
    "path": "shared/UIkit/dropdown-list-item/dropdown-list-item.component.ts",
    "inputs": [
      "menuItem",
      "disabled",
      "selected",
      "withoutHover",
      "theme"
    ],
    "snippet": "<li\n  class=\"dropdown-list-item\"\n  [ngClass]=\"{\n    'dropdown-list-item--selected': selected(),\n    'dropdown-list-item--disabled': disabled(),\n    'dropdown-list-item--without-hover': withoutHover()"
  },
  {
    "selector": "app-dropdown-menu",
    "className": "DropDownMenuComponent",
    "path": "shared/modules/header/drop-down-menu/drop-down-menu.component.ts",
    "inputs": [],
    "snippet": "@if (isNotDesktop$ | async) {\n  <app-mobile-current-route  [matMenuTriggerFor]=\"mobileMenu\" [openMenuState]=\"menuOpenState()\"></app-mobile-current-route>\n} @else {\n  <button class=\"menu-btn\" mat-icon-button [matMenuTriggerFor]=\"mobileMenu\" disableRipple=\"true\">\n    <app-icon-more-vertical strokeWidth=\"6\" color=\"#757575\"></app-icon-more-vertical>\n  </button>"
  },
  {
    "selector": "app-dummy-explainer",
    "className": "DummyExplainerComponent",
    "path": "shared/components/dummy-file/dummy-explainer/dummy-explainer.component.ts",
    "inputs": [],
    "snippet": "<svg\n  width=\"828\"\n  height=\"467\"\n  viewBox=\"0 0 828 467\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\""
  },
  {
    "selector": "app-dummy-file",
    "className": "DummyFileComponent",
    "path": "shared/components/dummy-file/dummy-file.component.ts",
    "inputs": [],
    "snippet": "<div class=\"dummy-container\">\n  <div\n    class=\"tabs\"\n    [ngClass]=\"{ 'tabs--small': !isRateflowPresentation }\"\n    #tabsRef\n  >"
  },
  {
    "selector": "app-dummy-how-to-use",
    "className": "DummyHowToUseComponent",
    "path": "shared/components/dummy-file/dummy-how-to-use/dummy-how-to-use.component.ts",
    "inputs": [],
    "snippet": "<div class=\"modal__container\">\n  <button mat-icon-button mat-dialog-close class=\"modal__btn--close\">\n    <img src=\"assets/close-modal-icon.svg\" alt=\"close-modal-icon\" />\n  </button>\n\n  <div class=\"modal__body tutorial\">"
  },
  {
    "selector": "app-edit-ice-breaker-modal",
    "className": "EditIceBreakerModalComponent",
    "path": "ice-breaker/modules/ice-breaker-template/components/edit-ice-breaker/edit-ice-breaker-modal/edit-ice-breaker-modal.component.ts",
    "inputs": [],
    "snippet": "<section class=\"modal-container\" *ngIf=\"currentUser$ | async as currentUser\">\n  <button (click)=\"close()\" class=\"close-modal-btn close-btn\">\n    <img src=\"assets/close-modal-icon.svg\" alt=\"close-modal-icon\" />\n  </button>\n  <ng-container *ngIf=\"isNewQuestionsState; else updateQuestions\">\n    <h1 class=\"title\">"
  },
  {
    "selector": "app-email-notifications",
    "className": "EmailNotificationsComponent",
    "path": "pages/profile/components/profile-info/email-notifications/email-notifications.component.ts",
    "inputs": [],
    "snippet": "<app-segment-title\n  title=\"email-notification.title\"\n></app-segment-title>\n\n\n<app-input-switch-checkbox-labeled"
  },
  {
    "selector": "app-empty-conversations",
    "className": "EmptyConversationsComponent",
    "path": "pages/conversations/components/empty-conversations/empty-conversations.component.ts",
    "inputs": [
      "filteredTypes"
    ],
    "snippet": "@if (filteredTypes(); as items) {\n  @if (items.length === 0) {\n    <div class=\"empty-block\">\n      {{ 'empty.empty-list' | translate }}\n    </div>\n    <div class=\"empty-details\">"
  },
  {
    "selector": "app-enter-video-call",
    "className": "EnterVideoCallComponent",
    "path": "shared/components/enter-video-call/enter-video-call.component.ts",
    "inputs": [
      "loading",
      "inProgress",
      "finished"
    ],
    "snippet": "<div class=\"enter-to-video-call\">\n  <div class=\"close\">\n    <app-close-card-icon color=\"#1e1e1e\" (click)=\"close.emit()\"></app-close-card-icon>\n  </div>\n  <h6 class=\"enter-to-video-call__title\" [innerHTML]=\"'video_call_invite.title' | translate\"></h6>\n  <p class=\"enter-to-video-call__description\"> {{ 'video_call_invite.description' | translate }} </p>"
  },
  {
    "selector": "app-escalation-modal",
    "className": "EscalationModalComponent",
    "path": "shared/components/escalation-modal/escalation-modal.component.ts",
    "inputs": [],
    "snippet": "<div class=\"modal-header\">\n  <h2 mat-dialog-title>{{ (errorState() ? 'escalation.title_error'  : 'escalation.title') | translate }}</h2> <app-close-icon strokeWidth=\"3\" (click)=\"onCancel()\"></app-close-icon>\n</div>\n\n<mat-dialog-content >\n  <p>{{  (errorState() ? 'escalation.description_error' : 'escalation.description') | translate }}</p>"
  },
  {
    "selector": "app-expertise-card",
    "className": "ExpertiseCardComponent",
    "path": "shared/model-based-components/skill/expertise-card/expertise-card.component.ts",
    "inputs": [
      "skill",
      "active"
    ],
    "snippet": "<div class=\"card\" [ngClass]=\"{'active' : active(),'disabled': skill().advisors_count === 0 && !active() }\">\n  <div class=\"card__content\">\n    <div class=\"card__icon-container\">\n      <img class=\"card__icon\" [ngClass]=\"{'active' : active()}\" [src]=\"skill().icon\" [alt]=\"skill().name\">\n    </div>\n    <div class=\"card__text\">"
  },
  {
    "selector": "app-expertise-title-card",
    "className": "ExpertiseTitleCardComponent",
    "path": "shared/model-based-components/skill/expertise-title-card/expertise-title-card.component.ts",
    "inputs": [
      "openRequest"
    ],
    "snippet": "<div class=\"expertise-card-content\">\n  <div class=\"expertise-card-content_icon\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"expertise-card-content_text\">\n    <h4 class=\"expertise-card-content_title\">"
  },
  {
    "selector": "app-facebook-icon",
    "className": "FacebookIconComponent",
    "path": "shared/icons/facebook-icon/facebook-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\">\n  <path d=\"M17.9999 2.42139H14.9999C13.6738 2.42139 12.402 2.94817 11.4643 3.88585C10.5267 4.82353 9.99988 6.0953 9.99988 7.42139V10.4214H6.99988V14.4214H9.99988V22.4214H13.9999V14.4214H16.9999L17.9999 10.4214H13.9999V7.42139C13.9999 7.15617 14.1052 6.90182 14.2928 6.71428C14.4803 6.52674 14.7347 6.42139 14.9999 6.42139H17.9999V2.42139Z\" stroke=\"#1E1E1E\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-feed-back-message",
    "className": "FeedBackMessageComponent",
    "path": "shared/model-based-components/conversation-messages/feed-back-message/feed-back-message.component.ts",
    "inputs": [
      "message",
      "direction"
    ],
    "snippet": "<div class=\"feedback-message\">\n  <div class=\"feedback-message__user\">\n    <div class=\"feedback-message__user-image\">\n      <img\n        [src]=\"avatarSrc()\"\n        alt=\"User avatar\""
  },
  {
    "selector": "app-feedback-bubble",
    "className": "FeedbackBubbleComponent",
    "path": "shared/components/feedback-bubble/feedback-bubble.component.ts",
    "inputs": [],
    "snippet": "<div class=\"feedback\" *ngIf=\"feedback\">\n  <app-user-info\n    *ngIf=\"rater\"\n    [user]=\"rater\"\n    [isRound]=\"true\"\n    [noName]=\"true\""
  },
  {
    "selector": "app-feedback-focus-area",
    "className": "FeedbackFocusAreaComponent",
    "path": "shared/components/feedback-focus-area/feedback-focus-area.component.ts",
    "inputs": [],
    "snippet": "<div\n  class=\"feedback-focus__container\"\n  #feedbackFocusRef\n  [ngStyle]=\"{\n    'paddingTop.rem': textPT,\n    'paddingLeft.rem': textPX,"
  },
  {
    "selector": "app-feedback-selector",
    "className": "FeedbackSelectorComponent",
    "path": "shared/components/feedback-selector/feedback-selector.component.ts",
    "inputs": [],
    "snippet": "<div class=\"feedback-selector\">\n  <button\n    *ngFor=\"let feedbackType of feedbackTypes\"\n    class=\"feedback-selector__item\"\n    [ngClass]=\"{\n      'feedback-selector__item--selected':"
  },
  {
    "selector": "app-fifth-card",
    "className": "FifthCardComponent",
    "path": "shared/components/onboarding-modal/fifth-card/fifth-card.component.ts",
    "inputs": [],
    "snippet": "<button mat-icon-button mat-dialog-close class=\"close-btn\">\n  <img src=\"assets/close-modal-icon.svg\" alt=\"close-modal-icon\" />\n</button>\n\n<div class=\"modal__body\">\n  <div class=\"modal-img\">"
  },
  {
    "selector": "app-file-icon",
    "className": "FileIconComponent",
    "path": "shared/icons/file-icon/file-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  width=\"25\"\n  height=\"25\"\n  viewBox=\"0 0 25 25\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\""
  },
  {
    "selector": "app-file-info",
    "className": "FileInfoComponent",
    "path": "shared/components/file-info/file-info.component.ts",
    "inputs": [],
    "snippet": "<div\n  class=\"file-info\"\n  *ngIf=\"\n    file &&\n    file.kind !== 'dummy' &&\n    file.showinfo &&"
  },
  {
    "selector": "app-file-preview-overlay",
    "className": "FilePreviewOverlayComponent",
    "path": "shared/components/file-preview/file-preview-overlay.component.ts",
    "inputs": [],
    "snippet": ""
  },
  {
    "selector": "app-filter",
    "className": "FilterComponent",
    "path": "pages/conversations/components/filter/filter.component.ts",
    "inputs": [],
    "snippet": "<div class=\"filter\">\n  <button\n    mat-button\n    class=\"filter__item\"\n    (click)=\"filter()\"\n    [ngClass]=\"{ 'filter__item--selected': isFilterScheduledCalls }\""
  },
  {
    "selector": "app-filter-icon",
    "className": "FilterIconComponent",
    "path": "shared/icons/filter-icon/filter-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  width=\"45\"\n  height=\"44\"\n  viewBox=\"0 0 45 44\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\""
  },
  {
    "selector": "app-filter-panel",
    "className": "FilterPanelComponent",
    "path": "pages/conversations/components/filter-panel/filter-panel.component.ts",
    "inputs": [
      "currentUser"
    ],
    "snippet": "<form [formGroup]=\"filtersForm\" class=\"filters\">\n  <app-type-multi-select formControlName=\"types\" [items]=\"filterItems()\">\n    <app-search\n      [control]=\"filtersForm.get('search')\"\n      [placeholder]=\"'filters.search' | translate\"\n    ></app-search>"
  },
  {
    "selector": "app-filter-panel",
    "className": "FilterPanelComponent",
    "path": "shared/complex-ui-components/filter-panel/filter-panel.component.ts",
    "inputs": [
      "filterItems",
      "actionsTemplate",
      "displayColumn",
      "placeholder"
    ],
    "snippet": "@if (!actionsTemplate() || isMobileScreen()) {\n  <app-button-filter\n    [isActive]=\"isActiveFilterButton()\"\n    [isOpened]=\"!isHiddenFilters()\"\n    (click)=\"toggleDisplayFilters()\"\n  ></app-button-filter>"
  },
  {
    "selector": "app-filters",
    "className": "FiltersComponent",
    "path": "pages/usersettings/components/user-permissions/filters/filters.component.ts",
    "inputs": [
      "organization"
    ],
    "snippet": "<div class=\"filters\">\n  <app-button-filter></app-button-filter>\n  <app-search-input\n    placeholder=\"Find User\"\n    class=\"search-input-wrapper\"\n  ></app-search-input>"
  },
  {
    "selector": "app-filters-list-horizontal",
    "className": "FiltersListHorizontalComponent",
    "path": "shared/complex-ui-components/filters-list-horizontal/filters-list-horizontal.component.ts",
    "inputs": [
      "filtersList",
      "allowMultiple"
    ],
    "snippet": "@for (item of filtersList(); track item.id) {\n  <app-chips-item\n    [chipsItem]=\"item\"\n    [isSelected]=\"isSelected(item)\"\n    (click)=\"toggleSelected(item)\"\n  ></app-chips-item>"
  },
  {
    "selector": "app-finance",
    "className": "FinanceComponent",
    "path": "pages/usersettings/sections/finance/finance.component.ts",
    "inputs": [],
    "snippet": "<app-section-header [title]=\"'finance' | translate\">\n  <app-secure-payment-icon></app-secure-payment-icon>\n</app-section-header>\n\n<app-finances-stripe\n  type=\"paying\""
  },
  {
    "selector": "app-finances-stripe",
    "className": "FinancesStripeComponent",
    "path": "pages/usersettings/components/finances-stripe/finances-stripe.component.ts",
    "inputs": [],
    "snippet": "@if (type === 'getting') {\n  <div\n    class=\"payments payments-getting\"\n    [ngClass]=\"{ 'payments-getting-connected': connect }\"\n  >\n    @if (!connect || (connect && advisorPayments?.balance)) {"
  },
  {
    "selector": "app-finish-questionnaire-button",
    "className": "FinishQuestionnaireButtonComponent",
    "path": "pages/conversation/components/finish-questionnaire-button/finish-questionnaire-button.component.ts",
    "inputs": [
      "conversation"
    ],
    "snippet": "<div class=\"finish-btn-container\">\n  <app-button [btnUIType]=\"'primary'\" size=\"large\" (click)=\"showLoginDialog()\">\n    <app-complete-flag-icon></app-complete-flag-icon>\n    {{ 'finish_questionnare_btn_text' | translate }}\n    <app-check-icon></app-check-icon>\n  </app-button>"
  },
  {
    "selector": "app-first-card",
    "className": "FirstCardComponent",
    "path": "shared/components/onboarding-modal/first-card/first-card.component.ts",
    "inputs": [],
    "snippet": "<button mat-icon-button mat-dialog-close class=\"modal__btn--close\">\n  <img src=\"assets/close-modal-icon.svg\" alt=\"close-modal-icon\" />\n</button>\n\n<div class=\"modal__body\">\n  <img"
  },
  {
    "selector": "app-flexfeedback",
    "className": "FlexfeedbackComponent",
    "path": "pages/rateflow/flexfeedback/flexfeedback.component.ts",
    "inputs": [],
    "snippet": "<div class=\"flexfeedback\">\n  <div class=\"slider-container\" *ngIf=\"feedbackObject\">\n    <app-slider\n      *ngIf=\"showSlider\"\n      [ratingType]=\"feedbackObject.display_name\"\n      [projectID]=\"project.id\""
  },
  {
    "selector": "app-fourth-card",
    "className": "FourthCardComponent",
    "path": "shared/components/onboarding-modal/fourth-card/fourth-card.component.ts",
    "inputs": [],
    "snippet": "<button mat-icon-button mat-dialog-close class=\"modal__btn--close\">\n  <img src=\"assets/close-modal-icon.svg\" alt=\"close-modal-icon\" />\n</button>\n\n<div class=\"modal__body\">\n  <img"
  },
  {
    "selector": "app-get-help",
    "className": "GetHelpComponent",
    "path": "pages/get-help/get-help.component.ts",
    "inputs": [],
    "snippet": "@if (isNotDesktop() && activeStepValue == 0) {\n<app-mobile-header [@collapseFade]=\"focused() || !!textFilter() || textFilter() !=='' ? 'closed' : 'open'\"\n  [title]=\"'title' | translate\" [subtitle]=\"'subtitle' | translate\"></app-mobile-header>\n} @else if(activeStepValue == 0) {\n<app-desktop-header [@collapseFade]=\"focused() || !!textFilter() || textFilter() !=='' ? 'closed' : 'open'\"\n  [title]=\"'title_desktop' | translate \" [subtitle]=\"'subtitle_desktop' | translate\"></app-desktop-header>"
  },
  {
    "selector": "app-get-support-icon",
    "className": "GetSupportIconComponent",
    "path": "shared/icons/get-support-icon/get-support-icon.component.ts",
    "inputs": [],
    "snippet": "<svg viewBox=\"0 0 17 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g clip-path=\"url(#clip0_4840_1021)\">\n    <g clip-path=\"url(#clip1_4840_1021)\">\n      <path d=\"M14.3768 3.03074C16.6333 5.28725 17.2195 8.6932 15.9436 11.5395C15.8729 11.6972 15.7178 11.7987 15.5452 11.8086L15.4225 11.8156C15.0327 11.8379 14.7718 11.4033 14.9296 11.0461C15.9919 8.64163 15.4863 5.74023 13.5768 3.83074C11.8054 2.05931 9.17683 1.48789 6.87207 2.28789C6.51016 2.40217 6.16731 2.5736 5.82445 2.76408L6.1257 3.21595C6.26252 3.42119 6.12548 3.69753 5.87929 3.71283L3.61548 3.85352C3.36967 3.8688 3.19947 3.61231 3.30905 3.39175L4.31991 1.35723C4.42969 1.13628 4.73766 1.11743 4.87357 1.32335L5.19588 1.8117C5.51969 1.62122 5.86254 1.44979 6.22445 1.31646C9.0054 0.249791 12.2244 0.878363 14.3768 3.03074ZM9.0054 16.0403C9.93874 16.0403 10.8721 15.8688 11.7483 15.526C12.0911 15.3927 12.434 15.2212 12.7768 15.0307L13.0991 15.5191C13.235 15.725 13.543 15.7062 13.6528 15.4852L14.662 13.4539C14.772 13.2327 14.6003 12.9756 14.3538 12.9923L12.0896 13.1458C11.8443 13.1624 11.7086 13.438 11.845 13.6425L12.1483 14.0974C11.8054 14.2879 11.4625 14.4593 11.1006 14.5736C8.79588 15.3736 6.16731 14.8022 4.39588 13.0307C2.48444 11.1193 1.9798 8.22923 3.04636 5.81279C3.20373 5.45626 2.94314 5.02342 2.55406 5.04565L2.42754 5.05288C2.25494 5.06274 2.09983 5.16424 2.02911 5.322C0.753171 8.16829 1.33938 11.5742 3.59588 13.8307C5.06254 15.2784 7.02445 16.0403 9.0054 16.0403Z\" [attr.fill]=\"fill()\"/>\n      <path d=\"M13.5454 7.10306C13.4701 6.34023 13.0557 5.65274 12.3964 5.21953C11.3982 4.5603 10.042 4.71098 9.15678 5.59624L9.08144 5.67158L8.95901 5.54915C8.41279 5.01234 7.66879 4.73923 6.89654 4.81457C6.13371 4.88991 5.44623 5.30429 5.01302 5.95411C4.35378 6.95238 4.50446 8.30852 5.38972 9.19378L8.5258 12.3299C8.67648 12.4805 8.86483 12.5559 9.08144 12.5559C9.28863 12.5559 9.4864 12.4711 9.63708 12.3299L12.8108 9.15611C13.3476 8.6193 13.6207 7.86589 13.5454 7.10306ZM12.1045 8.4592L9.08144 11.4823L6.09604 8.49687C5.54982 7.95065 5.44623 7.1219 5.85119 6.51917C6.1243 6.11421 6.52926 5.85993 7.00014 5.81284C7.05664 5.80343 7.10373 5.80343 7.16024 5.80343C7.57461 5.80343 7.96074 5.96353 8.2621 6.25547L8.73299 6.72635C8.82716 6.82053 8.94959 6.87704 9.08144 6.87704C9.21328 6.87704 9.34513 6.82053 9.42989 6.72635L9.8631 6.29314C10.4093 5.74692 11.2381 5.64333 11.8408 6.04828C12.2458 6.3214 12.5 6.72635 12.5471 7.19724C12.5942 7.66812 12.4341 8.12017 12.1045 8.4592Z\" [attr.fill]=\"fill()\" [attr.stroke]=\"color()\"  [attr.stroke-width]=\"strokeWidth()\"/>\n    </g>"
  },
  {
    "selector": "app-give-feedback-icon",
    "className": "GiveFeedbackIconComponent",
    "path": "shared/icons/give-feedback-icon/give-feedback-icon.component.ts",
    "inputs": [],
    "snippet": "<svg viewBox=\"0 0 25 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M7.94477 11.2728C8.6893 11.2728 9.29287 10.6693 9.29287 9.92475C9.29287 9.18022 8.6893 8.57666 7.94477 8.57666C7.20024 8.57666 6.59668 9.18022 6.59668 9.92475C6.59668 10.6693 7.20024 11.2728 7.94477 11.2728Z\" [attr.fill]=\"fill()\"/>\n  <path d=\"M16.0336 11.2728C16.7782 11.2728 17.3817 10.6693 17.3817 9.92475C17.3817 9.18022 16.7782 8.57666 16.0336 8.57666C15.2891 8.57666 14.6855 9.18022 14.6855 9.92475C14.6855 10.6693 15.2891 11.2728 16.0336 11.2728Z\" [attr.fill]=\"fill()\"/>\n  <path d=\"M11.9893 17.8203C12.8065 17.8203 13.5903 17.4956 14.1682 16.9178C14.746 16.3399 15.0707 15.5561 15.0707 14.7389C15.0685 14.3491 14.9917 13.9647 14.8458 13.6062C14.7393 13.3444 14.4698 13.1982 14.1872 13.1982H9.79147C9.50878 13.1982 9.23932 13.3444 9.1328 13.6062C8.98694 13.9647 8.91011 14.3491 8.90796 14.7389C8.90796 15.5561 9.2326 16.3399 9.81047 16.9178C10.3883 17.4956 11.1721 17.8203 11.9893 17.8203Z\" [attr.fill]=\"fill()\"/>\n  <path d=\"M11.9893 23.2127C12.0332 23.2127 12.0771 23.2125 12.121 23.212C12.7032 23.2053 13.1448 22.7115 13.1448 22.1292C13.1448 21.4469 12.5447 20.9249 11.8626 20.9156C10.4278 20.8959 9.01099 20.5423 7.72725 19.8753C6.06163 19.0098 4.69892 17.6578 3.82036 15.9991C2.94179 14.3404 2.58901 12.4535 2.80891 10.5894C3.02881 8.72527 3.81098 6.97226 5.0514 5.5635C6.29183 4.15473 7.93172 3.15696 9.75301 2.70287C11.5743 2.24878 13.4907 2.35989 15.2473 3.02142C17.0039 3.68296 18.5174 4.86357 19.5867 6.40625C20.656 7.94894 21.2304 9.78059 21.2334 11.6576C21.2334 12.0658 21.5622 12.428 21.9705 12.428H22.7388C23.1646 12.428 23.5367 12.0834 23.5367 11.6576C23.5367 9.37192 22.8588 7.13755 21.5888 5.23716C20.3187 3.33677 18.5136 1.85574 16.4018 0.981385C14.2899 0.107035 11.9662 -0.121344 9.72448 0.325136C7.48281 0.771616 5.4239 1.8729 3.8082 3.48968C2.1925 5.10645 1.09259 7.16609 0.647608 9.40807C0.202623 11.65 0.432551 13.9736 1.30831 16.0849C2.18407 18.1962 3.66631 20.0003 5.56755 21.2691C7.46878 22.5378 9.7036 23.2142 11.9893 23.2127Z\" [attr.fill]=\"fill()\"/>\n  <path d=\"M23.132 15.124H18.1518C17.5136 15.124 16.9963 15.6414 16.9963 16.2795C16.9963 16.9177 17.5136 17.435 18.1518 17.435H20.3703L16.1527 21.6526C15.7018 22.1036 15.7018 22.8348 16.1527 23.2858C16.6037 23.7367 17.3349 23.7367 17.7859 23.2858L22.0035 19.0682V21.2867C22.0035 21.9249 22.5208 22.4422 23.159 22.4422C23.7971 22.4422 24.3145 21.9249 24.3145 21.2867V16.2795C24.3133 16.1273 24.2821 15.9768 24.2226 15.8367C24.1631 15.6965 24.0766 15.5695 23.9678 15.463C23.7443 15.2451 23.4442 15.1234 23.132 15.124ZM22.0035 17.4736L21.9649 17.435H22.0035V17.4736Z\" [attr.fill]=\"fill()\"/>"
  },
  {
    "selector": "app-goey-footer",
    "className": "GoeyFooterComponent",
    "path": "shared/components/goey-footer/goey-footer.component.ts",
    "inputs": [],
    "snippet": "<div class=\"footer\">\n  <div class=\"animation-container\">\n    <canvas #canvas>\n    </canvas>\n  </div>\n  <div class=\"animation-container floating\">"
  },
  {
    "selector": "app-grid-presentation",
    "className": "GridPresentationComponent",
    "path": "shared/components/grid-presentation/grid-presentation.component.ts",
    "inputs": [],
    "snippet": "<div class=\"responsive-gallery\" #gallery>\n  <div\n    class=\"responsive-gallery-item\"\n    *ngFor=\"let item of projectFiles\"\n    (click)=\"clickItem.emit(item)\"\n  >"
  },
  {
    "selector": "app-grid-presentation-placeholder",
    "className": "GridPresentationPlaceholderComponent",
    "path": "shared/components/grid-presentation/grid-presentation-placeholder/grid-presentation-placeholder.component.ts",
    "inputs": [],
    "snippet": "<div class=\"placeholder\" #itemRef [ngStyle]=\"{ 'height.px': height }\">\n  <img class=\"image-preview\" [src]=\"src\" *ngIf=\"src\" />\n\n  <div class=\"badge__container\">\n    <img class=\"badge\" [src]=\"badgeSrc\" *ngIf=\"badgeSrc\" />\n  </div>"
  },
  {
    "selector": "app-group-chat",
    "className": "GroupChatComponent",
    "path": "shared/icons/group-chat/group-chat.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 27\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M28.9792 19.8943V25.3976C28.9792 25.8529 28.6937 26.2596 28.2654 26.4143C27.8381 26.57 27.3579 26.4402 27.067 26.0898L21.9834 19.9895H19.9132L16.9669 25.881C16.7841 26.2477 16.4099 26.4792 15.9999 26.4792C15.59 26.4792 15.2158 26.2477 15.033 25.881L12.0867 19.9895H10.0165L4.93293 26.0898C4.64198 26.4402 4.16174 26.57 3.7345 26.4143C3.30619 26.2596 3.02064 25.8529 3.02064 25.3976V19.8943C1.77571 19.5677 0.857422 18.4342 0.857422 17.0865V3.76539C0.857422 1.97317 2.31002 0.520569 4.10225 0.520569H27.8976C29.6899 0.520569 31.1425 1.97317 31.1425 3.76539V17.0865C31.1425 18.4342 30.2242 19.5677 28.9792 19.8943ZM27.8976 2.68379H4.10225C3.5052 2.68379 3.02064 3.16835 3.02064 3.76539V17.0865C3.02064 17.4953 3.35162 17.8263 3.76047 17.8263H3.99408C4.30991 17.8263 4.61276 17.9518 4.83557 18.1746C5.05838 18.3974 5.18386 18.7003 5.18386 19.0161V22.4102L8.35514 18.6051C8.76615 18.1118 9.37509 17.8263 10.0165 17.8263H12.0867C12.9065 17.8263 13.655 18.2892 14.0217 19.0226L15.9999 22.9791L17.9782 19.0226C18.3449 18.2892 19.0933 17.8263 19.9132 17.8263H21.9834C22.6248 17.8263 23.2337 18.1118 23.6447 18.6051L26.816 22.4102V19.2475C26.816 18.8701 26.9653 18.5088 27.2324 18.2427C27.4985 17.9756 27.8609 17.8263 28.2373 17.8263H28.2394C28.6483 17.8263 28.9792 17.4953 28.9792 17.0865V3.76539C28.9792 3.16835 28.4947 2.68379 27.8976 2.68379ZM24.112 8.63263C25.0076 8.63263 25.7344 9.35947 25.7344 10.255C25.7344 11.1506 25.0076 11.8775 24.112 11.8775C23.2164 11.8775 22.4896 11.1506 22.4896 10.255C22.4896 9.35947 23.2164 8.63263 24.112 8.63263ZM15.9999 8.63263C16.8955 8.63263 17.6224 9.35947 17.6224 10.255C17.6224 11.1506 16.8955 11.8775 15.9999 11.8775C15.1044 11.8775 14.3775 11.1506 14.3775 10.255C14.3775 9.35947 15.1044 8.63263 15.9999 8.63263ZM7.88788 8.63263C8.78345 8.63263 9.51029 9.35947 9.51029 10.255C9.51029 11.1506 8.78345 11.8775 7.88788 11.8775C6.9923 11.8775 6.26546 11.1506 6.26546 10.255C6.26546 9.35947 6.9923 8.63263 7.88788 8.63263Z\" [attr.fill]=\"fill()\"/>\n</svg>"
  },
  {
    "selector": "app-gt-switch",
    "className": "GtSwitchComponent",
    "path": "shared/components/gt-switch/gt-switch.component.ts",
    "inputs": [],
    "snippet": "<div class=\"gt-switch\" #switchRef>\n  <div class=\"gt-switch__left-label\" #leftLabelRef>\n    <ng-content select=\".gt-switch-left\"></ng-content>\n  </div>\n\n  <div"
  },
  {
    "selector": "app-header",
    "className": "HeaderComponent",
    "path": "shared/modules/header/header/header.component.ts",
    "inputs": [
      "organization"
    ],
    "snippet": "@if (conversationHeaderContent() && (isNotDesktop$ | async)) {\n\n\n@if(conversationHeaderContent()?.component) {\n    @if(conversationHeaderContent().isComponent) {\n        <ng-container [ngComponentOutlet]=\"conversationHeaderContent().component\""
  },
  {
    "selector": "app-header-mobile-navbar-item",
    "className": "HeaderMobileNavbarItemComponent",
    "path": "shared/modules/header/header-mobile-navbar-item/header-mobile-navbar-item.component.ts",
    "inputs": [
      "description"
    ],
    "snippet": "<a class=\"header-nav-item-wrap\"\n   [routerLink]=\"link()\"\n   [queryParams]=\"queryParams()\"\n\n   [routerLinkActive]=\"routerLinkActive()\">\n  <div"
  },
  {
    "selector": "app-header-nav-bar-item",
    "className": "HeaderNavBarItemComponent",
    "path": "shared/modules/header/header-nav-bar-item/header-nav-bar-item.component.ts",
    "inputs": [
      "link",
      "queryParams",
      "title"
    ],
    "snippet": "<a\n  class=\"header-nav-item\"\n  [routerLink]=\"navigateUrl()\"\n  [queryParams]=\"queryParams()\"\n  [routerLinkActive]=\"routerLinkActive()\"\n>"
  },
  {
    "selector": "app-heart",
    "className": "HeartComponent",
    "path": "shared/components/heart/heart.component.ts",
    "inputs": [],
    "snippet": "<div class=\"flex-container\">\n  <div class=\"unit\">\n    <div class=\"heart\">\n      <div class=\"heart__piece\"></div>\n      <div class=\"heart__piece\"></div>\n      <div class=\"heart__piece\"></div>"
  },
  {
    "selector": "app-heart-icon",
    "className": "HeartIconComponent",
    "path": "shared/icons/heart-icon/heart-icon.component.ts",
    "inputs": [
      "color",
      "outline"
    ],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\" fill=\"none\">\n  <g clip-path=\"url(#clip0_11248_1535)\">\n    <path d=\"M21.34 4.62562C20.8292 4.11462 20.2228 3.70927 19.5554 3.4327C18.8879 3.15614 18.1725 3.01379 17.45 3.01379C16.7275 3.01379 16.0121 3.15614 15.3446 3.4327C14.6772 3.70927 14.0708 4.11462 13.56 4.62562L12.5 5.68562L11.44 4.62562C10.4083 3.59393 9.00903 3.01433 7.55 3.01433C6.09096 3.01433 4.69169 3.59393 3.66 4.62562C2.6283 5.65731 2.04871 7.05659 2.04871 8.51562C2.04871 9.97465 2.6283 11.3739 3.66 12.4056L12.5 21.2456L21.34 12.4056C21.851 11.8949 22.2563 11.2884 22.5329 10.621C22.8095 9.95352 22.9518 9.23811 22.9518 8.51562C22.9518 7.79313 22.8095 7.07772 22.5329 6.41026C22.2563 5.74281 21.851 5.13638 21.34 4.62562Z\" [attr.fill]=\"fill()\" [attr.stroke]=\"color()\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </g>\n  <defs>\n    <clipPath id=\"clip0_11248_1535\">"
  },
  {
    "selector": "app-help-info",
    "className": "LogoErrorModalComponent",
    "path": "shared/modules/header/logo-error-modal/logo-error-modal.component.ts",
    "inputs": [],
    "snippet": "<section>\n  <button (click)=\"close()\" class=\"close-btn\">\n    <img src=\"../../../../../assets/close-modal-icon.svg\" alt=\"close-modal-icon\" />\n  </button>\n\n  <div class=\"modal__body\">"
  },
  {
    "selector": "app-helpnavigation",
    "className": "HelpnavigationComponent",
    "path": "shared/components/helpnavigation/helpnavigation.component.ts",
    "inputs": [],
    "snippet": "<div [ngClass]=\"{ hidden: hidden, active: control.value }\">\n  <input\n    type=\"checkbox\"\n    class=\"helpnavigation__checkbox\"\n    id=\"navi-toggle-help\"\n    [formControl]=\"control\""
  },
  {
    "selector": "app-home-icon",
    "className": "HomeIconComponent",
    "path": "shared/icons/home-icon/home-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\" fill=\"none\">\n  <path d=\"M9.66455 22.4292V12.4292H15.6646V22.4292M3.66455 9.4292L12.6646 2.4292L21.6646 9.4292V20.4292C21.6646 20.9596 21.4538 21.4683 21.0788 21.8434C20.7037 22.2185 20.195 22.4292 19.6646 22.4292H5.66455C5.13412 22.4292 4.62541 22.2185 4.25034 21.8434C3.87526 21.4683 3.66455 20.9596 3.66455 20.4292V9.4292Z\" [attr.stroke]=\"color()\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-home-title",
    "className": "HomeTitleComponent",
    "path": "pages/why/home-title/home-title.component.ts",
    "inputs": [],
    "snippet": "<h1 class=\"home_title\">\n  <span\n    class=\"title_we-care\"\n    [innerHTML]=\"'home.we_care' | translate\"\n  ></span>\n  <app-string-typer"
  },
  {
    "selector": "app-horizontal-line",
    "className": "HorizontalLineComponent",
    "path": "shared/UIkit/horizontal-line/horizontal-line.component.ts",
    "inputs": [],
    "snippet": ""
  },
  {
    "selector": "app-ice-breaker-card",
    "className": "IceBreakerCardComponent",
    "path": "ice-breaker/modules/ice-breakers-list/ice-breaker-card/ice-breaker-card.component.ts",
    "inputs": [
      "iceBreaker",
      "fullView",
      "orgId"
    ],
    "snippet": "<div class=\"ice-breaker-card_head\"\n     (click)=\"emitFullViewToggle.emit()\"\n>\n  <div class=\"head_content\">\n    <app-card-image\n      class=\"head_image\""
  },
  {
    "selector": "app-ice-breaker-card",
    "className": "IceBreakerCardComponent",
    "path": "ice-breaker/modules/ice-breakers-list-old/ice-breaker-card-module/components/ice-breaker-card/ice-breaker-card.component.ts",
    "inputs": [],
    "snippet": "<ng-container *ngIf=\"state === 'selectSkill'\">\n  <section class=\"ice-breaker\">\n    <section class=\"ice-breaker__promotion\">\n      <section class=\"ice-breaker__header\">\n        <div class=\"title-container not-owner-title\">\n          <div class=\"title\">"
  },
  {
    "selector": "app-ice-breaker-card-menu",
    "className": "IceBreakerCardMenuComponent",
    "path": "pages/profile/components/_child/ice-breakers-list/ice-breaker-card-menu/ice-breaker-card-menu.component.ts",
    "inputs": [
      "dropdownItems"
    ],
    "snippet": "<app-button-more-vert\n  class=\"capsule-card_dropdown-btn\"\n\n  color=\"#fff\"\n  hoverColor=\"#f5f5f5\"\n  activeColor=\"#f5f5f5\""
  },
  {
    "selector": "app-ice-breaker-list",
    "className": "IceBreakerListComponent",
    "path": "ice-breaker/modules/ice-breakers-list-old/page/ice-breaker-list/ice-breaker-list.component.ts",
    "inputs": [],
    "snippet": "<section\n  class=\"ice-breaker-page\"\n  *ngIf=\"publicProfile$ | async as publicProfile\"\n>\n  <app-ice-breaker-card\n    *ngIf=\"(isOwner$ | async) && !publicProfile.icebreakers.length\""
  },
  {
    "selector": "app-ice-breaker-template",
    "className": "IceBreakerTemplateComponent",
    "path": "ice-breaker/modules/ice-breaker-template/pages/ice-breaker-template/ice-breaker-template.component.ts",
    "inputs": [
      "userSkillId"
    ],
    "snippet": "<ng-container *ngIf=\"currentUser$ | async as currentUser\">\n  <section class=\"ice-breaker-template-container\">\n    <article class=\"ice-breaker-template-container__animation-container\">\n      <section class=\"ice-breaker-template-container__animation-container\">\n        <article class=\"ice-breaker-template-container__template\">\n          <article class=\"chat\">"
  },
  {
    "selector": "app-ice-breakers-list",
    "className": "IceBreakersListComponent",
    "path": "ice-breaker/modules/ice-breakers-list/ice-breakers-list.component.ts",
    "inputs": [
      "iceBreakers",
      "orgId"
    ],
    "snippet": "@for (iceBreaker of iceBreakers(); track iceBreaker.id) {\n  <app-ice-breaker-card\n    [iceBreaker]=\"iceBreaker\"\n    [fullView]=\"isOpened(iceBreaker)\"\n    [orgId]=\"orgId()\"\n    (emitFullViewToggle)=\"toggleOpened(iceBreaker)\""
  },
  {
    "selector": "app-ice-breakers-list-card",
    "className": "IceBreakersListCardComponent",
    "path": "pages/profile/components/_child/ice-breakers-list/ice-breakers-list-card/ice-breakers-list-card.component.ts",
    "inputs": [
      "iceBreaker",
      "userSkill",
      "isOwner",
      "scrollToCard"
    ],
    "snippet": "<!-- eslint-disable @angular-eslint/template/interactive-supports-focus -->\n<!-- eslint-disable @angular-eslint/template/click-events-have-key-events -->\n<div class=\"capsule-card_number-row\">\n  @if (isOwner() && !!iceBreaker()) {\n    <app-ice-breaker-card-menu\n      class=\"capsule-card_dropdown-menu\""
  },
  {
    "selector": "app-icebreaker-conversation-actions",
    "className": "IcebreakerConversationActionsComponent",
    "path": "pages/conversation/components/icebreaker-conversation-actions/icebreaker-conversation-actions.component.ts",
    "inputs": [
      "textInput",
      "audioInput"
    ],
    "snippet": "@if (conversation().hasNextSteps()) {\n  <app-next-step>\n    <div\n      class=\"ice-breaker-btn\"\n      (click)=\"nextIceBreakerQuestion(conversation())\"\n    >"
  },
  {
    "selector": "app-icon-about-us",
    "className": "IconAboutUsComponent",
    "path": "shared/icons/icon-about-us/icon-about-us.component.ts",
    "inputs": [
      "color"
    ],
    "snippet": "<svg viewBox=\"0 0 25 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M19.8516 11.0694H18.8352C18.0493 11.0697 17.2854 11.3296 16.6624 11.8086C16.3641 11.2254 15.9103 10.736 15.3512 10.3945C14.7921 10.053 14.1495 9.87267 13.4944 9.87349H11.4193C10.7642 9.87267 10.1216 10.053 9.56254 10.3945C9.00347 10.736 8.54968 11.2254 8.25132 11.8086C7.6283 11.3296 6.86449 11.0697 6.07859 11.0694H5.06746C4.12006 11.0708 3.21179 11.4474 2.54138 12.1168C1.87098 12.7863 1.49303 13.694 1.49023 14.6414V19.4224C1.49093 19.6607 1.58609 19.889 1.75484 20.0573C1.9236 20.2256 2.15218 20.32 2.39048 20.32H7.86324V21.3153C7.86324 21.4332 7.88646 21.5499 7.93156 21.6588C7.97667 21.7677 8.04279 21.8667 8.12614 21.95C8.20949 22.0334 8.30844 22.0995 8.41735 22.1446C8.52625 22.1897 8.64297 22.2129 8.76085 22.2129H16.1555C16.2734 22.2129 16.3901 22.1897 16.499 22.1446C16.6079 22.0995 16.7069 22.0334 16.7902 21.95C16.8736 21.8667 16.9397 21.7677 16.9848 21.6588C17.0299 21.5499 17.0531 21.4332 17.0531 21.3153V20.32H22.5285C22.7668 20.32 22.9954 20.2256 23.1642 20.0573C23.3329 19.889 23.4281 19.6607 23.4288 19.4224V14.6414C23.426 13.694 23.048 12.7863 22.3776 12.1168C21.7072 11.4474 20.799 11.0708 19.8516 11.0694ZM3.28809 18.5222V14.6414C3.29018 14.1708 3.47857 13.7203 3.81204 13.3883C4.14552 13.0563 4.59691 12.8699 5.06746 12.8699H6.08387C6.55442 12.8699 7.00581 13.0563 7.33928 13.3883C7.67275 13.7203 7.86114 14.1708 7.86324 14.6414V18.5222H3.28809ZM15.2579 20.4151H9.66109V13.4296C9.66179 12.9635 9.84726 12.5167 10.1768 12.1871C10.5064 11.8575 10.9532 11.672 11.4193 11.6713H13.4997C13.9658 11.672 14.4126 11.8575 14.7422 12.1871C15.0718 12.5167 15.2572 12.9635 15.2579 13.4296V20.4151ZM21.6309 18.5222H17.0558V14.6414C17.0565 14.1699 17.2443 13.718 17.5779 13.3849C17.9115 13.0517 18.3637 12.8646 18.8352 12.8646H19.8516C20.323 12.8646 20.7752 13.0517 21.1088 13.3849C21.4425 13.718 21.6302 14.1699 21.6309 14.6414V18.5222ZM12.4595 9.27948C13.2004 9.27948 13.9247 9.05977 14.5408 8.64814C15.1568 8.2365 15.637 7.65143 15.9205 6.9669C16.2041 6.28237 16.2783 5.52914 16.1337 4.80245C15.9892 4.07576 15.6324 3.40826 15.1085 2.88434C14.5846 2.36043 13.917 2.00364 13.1904 1.85909C12.4637 1.71455 11.7104 1.78873 11.0259 2.07227C10.3414 2.35581 9.75631 2.83597 9.34467 3.45203C8.93303 4.06808 8.71333 4.79237 8.71333 5.5333C8.71472 6.52642 9.10986 7.47846 9.8121 8.18071C10.5143 8.88295 11.4664 9.27809 12.4595 9.27948ZM12.4595 3.5876C12.8451 3.58708 13.2221 3.70097 13.5429 3.91486C13.8637 4.12874 14.1139 4.433 14.2617 4.78912C14.4095 5.14524 14.4483 5.5372 14.3732 5.91539C14.2981 6.29358 14.1125 6.64098 13.8398 6.91362C13.5672 7.18625 13.2198 7.37187 12.8416 7.44696C12.4634 7.52205 12.0715 7.48325 11.7153 7.33546C11.3592 7.18766 11.055 6.93753 10.8411 6.61673C10.6272 6.29592 10.5133 5.91887 10.5138 5.5333C10.5145 5.01748 10.7197 4.52299 11.0845 4.15826C11.4492 3.79352 11.9437 3.5883 12.4595 3.5876ZM19.342 10.7553C20.0054 10.7558 20.654 10.5595 21.2058 10.1913C21.7575 9.82309 22.1877 9.29948 22.4418 8.68672C22.6959 8.07396 22.7625 7.39961 22.6332 6.74898C22.5039 6.09835 22.1845 5.50069 21.7155 5.03163C21.2464 4.56257 20.6488 4.24319 19.9981 4.1139C19.3475 3.98462 18.6731 4.05124 18.0604 4.30533C17.4476 4.55943 16.924 4.98958 16.5558 5.54135C16.1876 6.09312 15.9913 6.74172 15.9919 7.40507C15.9939 8.29295 16.3476 9.14387 16.9754 9.7717C17.6032 10.3995 18.4542 10.7532 19.342 10.7553ZM19.342 5.8501C19.6497 5.84958 19.9506 5.94033 20.2067 6.11087C20.4627 6.28142 20.6624 6.52409 20.7805 6.80818C20.8986 7.09226 20.9298 7.405 20.8701 7.70681C20.8104 8.00862 20.6625 8.28593 20.4451 8.50366C20.2278 8.7214 19.9507 8.86975 19.649 8.92997C19.3473 8.99018 19.0345 8.95954 18.7502 8.84193C18.4659 8.72431 18.2229 8.52501 18.052 8.26924C17.881 8.01347 17.7897 7.71273 17.7897 7.40507C17.7897 6.99312 17.9532 6.59801 18.2442 6.30647C18.5353 6.01493 18.9301 5.8508 19.342 5.8501ZM5.57698 4.05225C4.91375 4.05172 4.26525 4.24792 3.71354 4.61602C3.16182 4.98411 2.73167 5.50757 2.4775 6.12017C2.22332 6.73277 2.15655 7.407 2.28562 8.05755C2.41469 8.70811 2.73381 9.30577 3.20261 9.77494C3.6714 10.2441 4.26881 10.5637 4.91927 10.6933C5.56972 10.8229 6.244 10.7566 6.8568 10.5029C7.4696 10.2492 7.9934 9.8195 8.36193 9.26807C8.73046 8.71665 8.92717 8.06831 8.92717 7.40507C8.92577 6.51673 8.57244 5.66514 7.94454 5.03674C7.31664 4.40834 6.46532 4.05434 5.57698 4.05225ZM5.57698 8.9574C5.26921 8.95792 4.96821 8.8671 4.7121 8.69644C4.45598 8.52578 4.25626 8.28295 4.13824 7.99871C4.02023 7.71447 3.98921 7.4016 4.04912 7.09972C4.10904 6.79784 4.25719 6.52053 4.47481 6.3029C4.69244 6.08528 4.96975 5.93713 5.27163 5.87721C5.57351 5.8173 5.88638 5.84831 6.17063 5.96633C6.45487 6.08435 6.69769 6.28406 6.86835 6.54018C7.03902 6.7963 7.12984 7.0973 7.12931 7.40507C7.12862 7.81656 6.96484 8.211 6.67388 8.50196C6.38291 8.79293 5.98847 8.9567 5.57698 8.9574Z\"\n    [attr.fill]=\"color()\"\n  />\n</svg>"
  },
  {
    "selector": "app-icon-anchor",
    "className": "IconAnchorComponent",
    "path": "shared/icons/icon-anchor/icon-anchor.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 41 41\" fill=\"none\">\n  <path d=\"M20.5 13.8333C23.2614 13.8333 25.5 11.5947 25.5 8.83325C25.5 6.07183 23.2614 3.83325 20.5 3.83325C17.7386 3.83325 15.5 6.07183 15.5 8.83325C15.5 11.5947 17.7386 13.8333 20.5 13.8333ZM20.5 13.8333V37.1666M20.5 37.1666C16.0797 37.1666 11.8405 35.4106 8.7149 32.285C5.58929 29.1594 3.83334 24.9202 3.83334 20.4999H8.83334M20.5 37.1666C24.9203 37.1666 29.1595 35.4106 32.2851 32.285C35.4107 29.1594 37.1667 24.9202 37.1667 20.4999H32.1667\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-icon-arrow",
    "className": "IconArrowComponent",
    "path": "shared/icons/icon-arrow/icon-arrow.component.ts",
    "inputs": [
      "direction"
    ],
    "snippet": "<div class=\"icon-wrapper\" [ngClass]=\"direction()\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 17 16\" fill=\"none\">\n    <path d=\"M4.5 6L8.5 10L12.5 6\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </svg>\n</div>"
  },
  {
    "selector": "app-icon-audio-record",
    "className": "IconAudioRecordComponent",
    "path": "shared/icons/icon-audio-record/icon-audio-record.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\">\n  <path d=\"M19 10V12C19 13.8565 18.2625 15.637 16.9497 16.9498C15.637 18.2625 13.8565 19 12 19M12 19C10.1435 19 8.36301 18.2625 7.05025 16.9498C5.7375 15.637 5 13.8565 5 12V10M12 19V22.7322M11.9194 1.27721C11.1238 1.27721 10.3607 1.59328 9.79808 2.15589C9.23547 2.7185 9 3.20438 9 4.00003V12C9 12.7957 9.31607 13.5587 9.87868 14.1214C10.4413 14.684 11.2044 15 12 15C12.7956 15 13.5587 14.684 14.1213 14.1214C14.6839 13.5587 15 12.7957 15 12V4.00003C15 3.20438 14.6033 2.7185 14.0407 2.15589C13.4781 1.59328 12.7151 1.27721 11.9194 1.27721Z\" [attr.stroke]=\"color()\"\n        [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-icon-brief",
    "className": "IconBriefComponent",
    "path": "shared/icons/icon-brief/icon-brief.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\" fill=\"none\">\n  <g clip-path=\"url(#clip0_14702_2935)\">\n    <path d=\"M14.7311 6.4423H10.2687C9.03888 6.4423 8.03809 5.44043 8.03809 4.2106V3.09577C8.03809 1.86591 9.03891 0.865112 10.2687 0.865112H14.7311C15.962 0.865112 16.9618 1.86594 16.9618 3.09577V4.21164C16.9628 5.44043 15.962 6.4423 14.7311 6.4423ZM10.2698 3.09577V4.21164H14.7322L14.7312 3.09577H10.2698Z\" [attr.fill]=\"color()\"/>\n    <path d=\"M18.078 12.0195H11.3849C10.7689 12.0195 10.269 11.5206 10.269 10.9036C10.269 10.2866 10.7689 9.78772 11.3849 9.78772H18.078C18.6939 9.78772 19.1938 10.2866 19.1938 10.9036C19.1938 11.5206 18.6939 12.0195 18.078 12.0195Z\" [attr.fill]=\"color()\"/>\n    <path d=\"M8.03828 10.9037C8.03828 12.3918 5.80762 12.3918 5.80762 10.9037C5.80762 9.41655 8.03828 9.41655 8.03828 10.9037Z\" [attr.fill]=\"color()\"/>\n    <path d=\"M18.078 17.5967H11.3849C10.7689 17.5967 10.269 17.0979 10.269 16.4809C10.269 15.8638 10.7689 15.365 11.3849 15.365H18.078C18.6939 15.365 19.1938 15.8638 19.1938 16.4809C19.1938 17.0979 18.6939 17.5967 18.078 17.5967Z\" [attr.fill]=\"color()\"/>"
  },
  {
    "selector": "app-icon-briefings",
    "className": "IconBriefingsComponent",
    "path": "shared/icons/icon-briefings/icon-briefings.component.ts",
    "inputs": [
      "color"
    ],
    "snippet": "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g clip-path=\"url(#clip0_8442_14363)\">\n    <path\n      d=\"M14.2311 6.42228H9.76875C8.53888 6.42228 7.53809 5.42041 7.53809 4.19058V3.07575C7.53809 1.84589 8.53891 0.845093 9.76875 0.845093H14.2311C15.462 0.845093 16.4618 1.84592 16.4618 3.07575V4.19162C16.4628 5.42041 15.462 6.42228 14.2311 6.42228ZM9.76982 3.07575V4.19162H14.2322L14.2312 3.07575H9.76982Z\"\n      [attr.fill]=\"color()\" />\n    <path"
  },
  {
    "selector": "app-icon-cancel-bordered",
    "className": "IconCancelBorderedComponent",
    "path": "shared/icons/icon-cancel-bordered/icon-cancel-bordered.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\">\n  <path d=\"M9 9L15 15M15 9L9 15M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z\" [attr.stroke]=\"color()\"\n        [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-icon-capsule-closed",
    "className": "IconCapsuleClosedComponent",
    "path": "shared/icons/icon-capsule-closed/icon-capsule-closed.component.ts",
    "inputs": [
      "color"
    ],
    "snippet": "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.1479 4.80421C13.6185 5.07696 13.7798 5.67812 13.509 6.14874L11.0504 10.407C10.7777 10.8757 10.1765 11.037 9.70591 10.7662C9.23726 10.4954 9.07594 9.89229 9.34674 9.4236L11.8053 5.16531C12.0761 4.69473 12.6792 4.53337 13.1479 4.80421Z\"\n        [attr.fill]=\"color()\"\n  />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.2279 0.923935C14.9358 -0.977599 10.7255 0.149889 8.82402 3.44394L2.92352 13.6621C1.02198 16.9562 2.15139 21.1666 5.44352 23.066C8.73566 24.9676 12.946 23.8401 14.8474 20.546L17.7958 15.4387L17.7977 15.4367L20.7479 10.3274C22.6495 7.03336 21.5201 2.8234 18.2279 0.923935ZM16.094 14.4538L19.0443 9.34444C20.4022 6.99152 19.5955 3.98384 17.2445 2.6277C14.8936 1.26975 11.8859 2.07453 10.5278 4.42745L7.57754 9.53679C7.24909 10.1034 7.23756 10.9216 7.71391 11.882C8.18449 12.8366 9.09492 13.82 10.3607 14.5499C11.6264 15.2817 12.9345 15.5775 13.9947 15.5083C15.0646 15.4392 15.7656 15.0224 16.0921 14.4558L16.094 14.4538ZM14.3635 17.4521C14.2828 17.4597 14.2021 17.4655 14.1214 17.4713C12.6213 17.5692 10.933 17.1524 9.37724 16.2535C7.82148 15.3546 6.61714 14.1004 5.95063 12.7539C5.91413 12.6809 5.87956 12.6079 5.8469 12.535L4.62722 14.6459C3.26927 16.9988 4.07597 20.0065 6.42697 21.3626C8.77793 22.7205 11.7856 21.9158 13.1437 19.5628L14.3635 17.4521Z\"\n        [attr.fill]=\"color()\""
  },
  {
    "selector": "app-icon-check-circle",
    "className": "IconCheckCircleComponent",
    "path": "shared/icons/icon-check-circle/icon-check-circle.component.ts",
    "inputs": [
      "color",
      "strokeWidth",
      "fill"
    ],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\" fill=\"none\">\n  <path\n    d=\"M22.4695 11.4605V12.3805C22.4683 14.5369 21.77 16.6352 20.4788 18.3623C19.1877 20.0895 17.3728 21.353 15.3048 21.9644C13.2369 22.5758 11.0267 22.5024 9.00395 21.7551C6.98116 21.0077 5.25414 19.6266 4.08044 17.8175C2.90675 16.0085 2.34927 13.8685 2.49116 11.7168C2.63304 9.56504 3.46669 7.51681 4.86776 5.87755C6.26884 4.2383 8.16227 3.09586 10.2657 2.62063C12.3691 2.14539 14.5698 2.36282 16.5395 3.24048\"\n    [attr.fill]=\"fill()\"\n  />\n  <path"
  },
  {
    "selector": "app-icon-chevrons-down",
    "className": "IconChevronsDownComponent",
    "path": "shared/icons/icon-chevrons-down/icon-chevrons-down.component.ts",
    "inputs": [
      "color",
      "strokeWidth"
    ],
    "snippet": "<svg viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M14 26L24 36L34 26M14 12L24 22L34 12\"\n        [attr.stroke]=\"color()\"\n        [attr.stroke-width]=\"strokeWidth()\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\""
  },
  {
    "selector": "app-icon-chevrons-up",
    "className": "IconChevronsUpComponent",
    "path": "shared/icons/icon-chevrons-up/icon-chevrons-up.component.ts",
    "inputs": [
      "color",
      "strokeWidth"
    ],
    "snippet": "<svg viewBox=\"0 0 49 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M34.5 22L24.5 12L14.5 22M34.5 36L24.5 26L14.5 36\"\n        [attr.stroke]=\"color()\"\n        [attr.stroke-width]=\"strokeWidth()\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\""
  },
  {
    "selector": "app-icon-clipboard",
    "className": "IconClipboardComponent",
    "path": "shared/icons/icon-clipboard/icon-clipboard.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 24\" fill=\"none\">\n  <path d=\"M16.5 4H18.5C19.0304 4 19.5391 4.21071 19.9142 4.58579C20.2893 4.96086 20.5 5.46957 20.5 6V20C20.5 20.5304 20.2893 21.0391 19.9142 21.4142C19.5391 21.7893 19.0304 22 18.5 22H6.5C5.96957 22 5.46086 21.7893 5.08579 21.4142C4.71071 21.0391 4.5 20.5304 4.5 20V6C4.5 5.46957 4.71071 4.96086 5.08579 4.58579C5.46086 4.21071 5.96957 4 6.5 4H8.5M9.5 2H15.5C16.0523 2 16.5 2.44772 16.5 3V5C16.5 5.55228 16.0523 6 15.5 6H9.5C8.94772 6 8.5 5.55228 8.5 5V3C8.5 2.44772 8.94772 2 9.5 2Z\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-icon-double-right-arrow",
    "className": "IconDoubleRightArrowComponent",
    "path": "shared/icons/icon-double-right-arrow/icon-double-right-arrow.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 17 17\" fill=\"none\">\n  <path d=\"M9.16667 11.5163L12.5 8.18294L9.16667 4.84961M4.5 11.5163L7.83333 8.18294L4.5 4.84961\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-icon-draggable",
    "className": "IconDraggableComponent",
    "path": "shared/icons/icon-draggable/icon-draggable.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\">\n  <g clip-path=\"url(#clip0_15508_12084)\">\n    <path d=\"M5 9L2 12M2 12L5 15M2 12H22M9 5L12 2M12 2L15 5M12 2V22M15 19L12 22M12 22L9 19M19 9L22 12M22 12L19 15\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </g>\n  <defs>\n    <clipPath id=\"clip0_15508_12084\">"
  },
  {
    "selector": "app-icon-edit",
    "className": "IconEditComponent",
    "path": "shared/icons/icon-edit/icon-edit.component.ts",
    "inputs": [
      "color",
      "strokeWidth"
    ],
    "snippet": "<svg viewBox=\"0 0 17 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g id=\"Edit\" clip-path=\"url(#clip0_10369_11815)\">\n    <path id=\"Icon\"\n          d=\"M7.83325 2.66665H3.16659C2.81296 2.66665 2.47382 2.80713 2.22378 3.05718C1.97373 3.30723 1.83325 3.64637 1.83325 3.99999V13.3333C1.83325 13.6869 1.97373 14.0261 2.22378 14.2761C2.47382 14.5262 2.81296 14.6667 3.16659 14.6667H12.4999C12.8535 14.6667 13.1927 14.5262 13.4427 14.2761C13.6928 14.0261 13.8333 13.6869 13.8333 13.3333V8.66665M12.8333 1.66665C13.0985 1.40144 13.4582 1.25244 13.8333 1.25244C14.2083 1.25244 14.568 1.40144 14.8333 1.66665C15.0985 1.93187 15.2475 2.29158 15.2475 2.66665C15.2475 3.04173 15.0985 3.40144 14.8333 3.66665L8.49992 9.99999L5.83325 10.6667L6.49992 7.99999L12.8333 1.66665Z\"\n          [attr.stroke]=\"color()\"\n          [attr.stroke-width]=\"strokeWidth()\""
  },
  {
    "selector": "app-icon-emoji-anim-fill-negative-four",
    "className": "IconEmojiAnimFillNegativeFourComponent",
    "path": "shared/icons/icon-emoji-anim-fill-negative-four/icon-emoji-anim-fill-negative-four.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"41\" height=\"41\" viewBox=\"0 0 41 41\" fill=\"none\">\n  <g clip-path=\"url(#clip0_6717_59477)\">\n    <path\n      d=\"M20.9265 35.7946C29.221 35.7946 35.9449 29.0706 35.9449 20.7762C35.9449 12.4817 29.221 5.75775 20.9265 5.75775C12.6321 5.75775 5.90808 12.4817 5.90808 20.7762C5.90808 29.0706 12.6321 35.7946 20.9265 35.7946Z\"\n      fill=\"white\" stroke=\"#242526\" stroke-width=\"1.07943\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"\n      stroke-linejoin=\"round\" />"
  },
  {
    "selector": "app-icon-emoji-anim-fill-negative-one",
    "className": "IconEmojiAnimFillNegativeOneComponent",
    "path": "shared/icons/icon-emoji-anim-fill-negative-one/icon-emoji-anim-fill-negative-one.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"41\" height=\"41\" viewBox=\"0 0 41 41\" fill=\"none\">\n  <path\n    d=\"M20.2332 35.7946C28.5276 35.7946 35.2516 29.0706 35.2516 20.7761C35.2516 12.4817 28.5276 5.75769 20.2332 5.75769C11.9387 5.75769 5.21472 12.4817 5.21472 20.7761C5.21472 29.0706 11.9387 35.7946 20.2332 35.7946Z\"\n    fill=\"white\" stroke=\"#242526\" stroke-width=\"1.08201\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"\n    stroke-linejoin=\"round\" />\n  <path"
  },
  {
    "selector": "app-icon-emoji-anim-fill-negative-three",
    "className": "IconEmojiAnimFillNegativeThreeComponent",
    "path": "shared/icons/icon-emoji-anim-fill-negative-three/icon-emoji-anim-fill-negative-three.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"41\" height=\"41\" viewBox=\"0 0 41 41\" fill=\"none\">\n  <path\n    d=\"M20.1953 35.7946C28.4898 35.7946 35.2137 29.0706 35.2137 20.7761C35.2137 12.4817 28.4898 5.75769 20.1953 5.75769C11.9009 5.75769 5.17688 12.4817 5.17688 20.7761C5.17688 29.0706 11.9009 35.7946 20.1953 35.7946Z\"\n    fill=\"white\" stroke=\"#242526\" stroke-width=\"1.08201\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"\n    stroke-linejoin=\"round\" />\n  <path"
  },
  {
    "selector": "app-icon-emoji-anim-fill-negative-two",
    "className": "IconEmojiAnimFillNegativeTwoComponent",
    "path": "shared/icons/icon-emoji-anim-fill-negative-two/icon-emoji-anim-fill-negative-two.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"41\" height=\"41\" viewBox=\"0 0 41 41\" fill=\"none\">\n  <path\n    d=\"M20.4642 35.7946C28.7587 35.7946 35.4827 29.0706 35.4827 20.7761C35.4827 12.4817 28.7587 5.75769 20.4642 5.75769C12.1698 5.75769 5.4458 12.4817 5.4458 20.7761C5.4458 29.0706 12.1698 35.7946 20.4642 35.7946Z\"\n    fill=\"white\" stroke=\"#242526\" stroke-width=\"1.08201\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"\n    stroke-linejoin=\"round\" />\n  <path"
  },
  {
    "selector": "app-icon-emoji-anim-fill-negative-zero",
    "className": "IconEmojiAnimFillNegativeZeroComponent",
    "path": "shared/icons/icon-emoji-anim-fill-negative-zero/icon-emoji-anim-fill-negative-zero.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"42\" height=\"41\" viewBox=\"0 0 42 41\" fill=\"none\">\n  <path\n    d=\"M21.0021 35.7946C29.2965 35.7946 36.0205 29.0706 36.0205 20.7762C36.0205 12.4817 29.2965 5.75775 21.0021 5.75775C12.7076 5.75775 5.98364 12.4817 5.98364 20.7762C5.98364 29.0706 12.7076 35.7946 21.0021 35.7946Z\"\n    fill=\"white\" stroke=\"#242526\" stroke-width=\"1.07747\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"\n    stroke-linejoin=\"round\" />\n  <path"
  },
  {
    "selector": "app-icon-emoji-anim-fill-no-rating",
    "className": "IconEmojiAnimFillNoRatingComponent",
    "path": "shared/icons/icon-emoji-anim-fill-no-rating/icon-emoji-anim-fill-no-rating.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"41\" height=\"41\" viewBox=\"0 0 41 41\" fill=\"none\">\n  <path\n    d=\"M20.0833 35.7945C28.3777 35.7945 35.1017 29.0705 35.1017 20.7761C35.1017 12.4816 28.3777 5.75763 20.0833 5.75763C11.7888 5.75763 5.06482 12.4816 5.06482 20.7761C5.06482 29.0705 11.7888 35.7945 20.0833 35.7945Z\"\n    fill=\"white\" stroke=\"#242526\" stroke-width=\"1.07689\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"\n    stroke-linejoin=\"round\" />\n  <path d=\"M13.839 20.2378C15.9383 20.2109 19.195 21.2067 20.5138 22.2026\" stroke=\"#242526\" stroke-width=\"1.07689\""
  },
  {
    "selector": "app-icon-emoji-anim-fill-positive-four",
    "className": "IconEmojiAnimFillPositiveFourComponent",
    "path": "shared/icons/icon-emoji-anim-fill-positive-four/icon-emoji-anim-fill-positive-four.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"42\" height=\"41\" viewBox=\"0 0 42 41\" fill=\"none\">\n  <path\n    d=\"M21.0114 35.7959C29.3066 35.7959 36.0312 29.0713 36.0312 20.7761C36.0312 12.4809 29.3066 5.75629 21.0114 5.75629C12.7162 5.75629 5.99158 12.4809 5.99158 20.7761C5.99158 29.0713 12.7162 35.7959 21.0114 35.7959Z\"\n    fill=\"white\" stroke=\"#242526\" stroke-width=\"1.07669\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"\n    stroke-linejoin=\"round\" />\n  <path"
  },
  {
    "selector": "app-icon-emoji-anim-fill-positive-one",
    "className": "IconEmojiAnimFillPositiveOneComponent",
    "path": "shared/icons/icon-emoji-anim-fill-positive-one/icon-emoji-anim-fill-positive-one.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"41\" height=\"41\" viewBox=\"0 0 41 41\" fill=\"none\">\n  <path\n    d=\"M20.7046 35.7945C28.999 35.7945 35.723 29.0705 35.723 20.7761C35.723 12.4816 28.999 5.75763 20.7046 5.75763C12.4101 5.75763 5.68616 12.4816 5.68616 20.7761C5.68616 29.0705 12.4101 35.7945 20.7046 35.7945Z\"\n    fill=\"white\" stroke=\"#242526\" stroke-width=\"1.07518\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"\n    stroke-linejoin=\"round\" />\n  <path"
  },
  {
    "selector": "app-icon-emoji-anim-fill-positive-three",
    "className": "IconEmojiAnimFillPositiveThreeComponent",
    "path": "shared/icons/icon-emoji-anim-fill-positive-three/icon-emoji-anim-fill-positive-three.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"41\" height=\"41\" viewBox=\"0 0 41 41\" fill=\"none\">\n  <path\n    d=\"M20.2425 35.7946C28.5369 35.7946 35.2609 29.0706 35.2609 20.7761C35.2609 12.4817 28.5369 5.75769 20.2425 5.75769C11.948 5.75769 5.22402 12.4817 5.22402 20.7761C5.22402 29.0706 11.948 35.7946 20.2425 35.7946Z\"\n    fill=\"white\" stroke=\"#242526\" stroke-width=\"1.07628\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"\n    stroke-linejoin=\"round\" />\n  <path"
  },
  {
    "selector": "app-icon-emoji-anim-fill-positive-two",
    "className": "IconEmojiAnimFillPositiveTwoComponent",
    "path": "shared/icons/icon-emoji-anim-fill-positive-two/icon-emoji-anim-fill-positive-two.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"41\" height=\"41\" viewBox=\"0 0 41 41\" fill=\"none\">\n  <path\n    d=\"M20.4735 35.7946C28.7679 35.7946 35.4919 29.0706 35.4919 20.7762C35.4919 12.4817 28.7679 5.75775 20.4735 5.75775C12.179 5.75775 5.45505 12.4817 5.45505 20.7762C5.45505 29.0706 12.179 35.7946 20.4735 35.7946Z\"\n    fill=\"white\" stroke=\"#242526\" stroke-width=\"1.08214\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"\n    stroke-linejoin=\"round\" />\n  <path"
  },
  {
    "selector": "app-icon-emoji-anim-fill-positive-zero",
    "className": "IconEmojiAnimFillPositiveZeroComponent",
    "path": "shared/icons/icon-emoji-anim-fill-positive-zero/icon-emoji-anim-fill-positive-zero.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"41\" height=\"41\" viewBox=\"0 0 41 41\" fill=\"none\">\n  <path\n    d=\"M20.9357 35.7945C29.2301 35.7945 35.9541 29.0705 35.9541 20.7761C35.9541 12.4816 29.2301 5.75763 20.9357 5.75763C12.6412 5.75763 5.91724 12.4816 5.91724 20.7761C5.91724 29.0705 12.6412 35.7945 20.9357 35.7945Z\"\n    fill=\"white\" stroke=\"#242526\" stroke-width=\"1.08867\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"\n    stroke-linejoin=\"round\" />\n  <path d=\"M16.3333 29.7387C21.7431 30.7884 25.2152 29.9271 27.0184 28.4737\" stroke=\"#242526\" stroke-width=\"1.08867\""
  },
  {
    "selector": "app-icon-events",
    "className": "IconEventsComponent",
    "path": "shared/icons/icon-events/icon-events.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 24\" fill=\"none\">\n  <path d=\"M16.5 2V6M8.5 2V6M3.5 10H21.5M5.5 4H19.5C20.6046 4 21.5 4.89543 21.5 6V20C21.5 21.1046 20.6046 22 19.5 22H5.5C4.39543 22 3.5 21.1046 3.5 20V6C3.5 4.89543 4.39543 4 5.5 4Z\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-icon-finish",
    "className": "IconFinishComponent",
    "path": "shared/icons/icon-finish/icon-finish.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 17\" fill=\"none\">\n  <g clip-path=\"url(#clip0_10946_95199)\">\n    <path d=\"M3.04731 2.21262C3.04731 1.60466 2.55446 1.11182 1.94651 1.11182C1.33855 1.11182 0.845703 1.60466 0.845703 2.21262V15.4223C0.845703 16.0302 1.33855 16.5231 1.94651 16.5231C2.55446 16.5231 3.04731 16.0302 3.04731 15.4223V2.21262Z\"\n          [attr.fill]=\"fill()\"/>\n    <path d=\"M6.90035 2.39949V4.59562C6.12969 4.48564 5.23261 4.41401 4.14844 4.41401V2.2124C5.24376 2.2124 6.12988 2.28403 6.90035 2.39949Z\" [attr.fill]=\"fill()\"/>\n    <path d=\"M4.14648 5.51489C5.25277 5.51489 6.13341 5.592 6.8984 5.70746V7.89811C6.12774 7.78813 5.23065 7.7165 4.14648 7.7165V5.51489Z\" [attr.fill]=\"fill()\"/>"
  },
  {
    "selector": "app-icon-globe",
    "className": "IconGlobeComponent",
    "path": "shared/icons/icon-globe/icon-globe.component.ts",
    "inputs": [
      "color",
      "strokeWidth"
    ],
    "snippet": "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g clip-path=\"url(#clip0_4039_12444)\">\n    <path\n      d=\"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H2M12 22C6.47715 22 2 17.5228 2 12M12 22C14.5013 19.2616 15.9228 15.708 16 12C15.9228 8.29203 14.5013 4.73835 12 2M12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2M2 12C2 6.47715 6.47715 2 12 2\"\n      [attr.stroke]=\"color()\"\n      [attr.stroke-width]=\"strokeWidth()\""
  },
  {
    "selector": "app-icon-hands",
    "className": "IconHandsComponent",
    "path": "shared/icons/icon-hands/icon-hands.component.ts",
    "inputs": [
      "color"
    ],
    "snippet": "<svg viewBox=\"0 0 131 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M123.183 95.6724L106.648 81.7078C107.186 80.7074 107.522 79.6054 107.623 78.4375C107.811 76.193 107.115 74.0095 105.668 72.298C104.607 71.0386 103.231 70.1347 101.682 69.6676C103.977 66.5953 103.952 62.2332 101.382 59.1762C100.265 57.8509 98.7923 56.9215 97.147 56.4797C98.9853 53.4684 98.7973 49.4922 96.4005 46.6384C95.0701 45.0642 93.2419 44.0536 91.2106 43.7539C92.1399 41.0422 91.6677 37.9141 89.6922 35.5679C88.25 33.8516 86.2086 32.8054 83.9642 32.6125C81.7044 32.4145 79.5309 33.1153 77.8145 34.5625L77.4997 34.8266L68.0239 30.4036C63.0625 27.8289 58.7208 29.8551 56.6184 32.9935C55.9177 34.0395 55.4911 35.1669 55.2676 36.3044L53.2009 34.5575C49.6461 31.5614 44.3142 32.0185 41.3181 35.568C39.3377 37.9141 38.8704 41.0371 39.7997 43.754C37.7684 44.0536 35.9454 45.0641 34.6098 46.6435C33.1625 48.3599 32.472 50.5435 32.6598 52.7881C32.7715 54.1185 33.1879 55.3779 33.8583 56.4798C32.2586 56.9115 30.7708 57.8153 29.6231 59.1712C27.0485 62.2283 27.0231 66.5903 29.3235 69.6626C27.8205 70.1196 26.4239 70.9981 25.3372 72.288C23.047 74.9996 22.783 78.7422 24.3622 81.7028L7.81709 95.6674C6.95888 96.3885 6.85225 97.6733 7.57334 98.5314C7.97451 99.0088 8.54834 99.2526 9.12723 99.2526C9.58934 99.2526 10.0515 99.0951 10.4374 98.7752L27.0384 84.7651L33.6958 90.3815C35.2243 91.6713 37.1235 92.3619 39.1091 92.3619C39.3529 92.3619 39.5966 92.3518 39.8404 92.3314C42.085 92.1385 44.1213 91.0924 45.5583 89.3811C47.0107 87.6698 47.7012 85.4912 47.5134 83.2416C47.4118 82.0533 47.0614 80.9311 46.5079 79.9154C48.1837 79.5092 49.7579 78.6053 50.9564 77.1884C52.6017 75.2384 53.1704 72.7551 52.7896 70.4142H52.7947C55.1611 70.4142 57.4971 69.4291 59.0967 67.5451C60.5896 66.0421 61.3616 64.0005 61.2651 61.7966C61.26 61.7256 61.2347 61.6545 61.2347 61.5834C61.5698 61.624 61.8948 61.6799 62.235 61.6799C62.4788 61.6799 62.7225 61.6697 62.9663 61.6494C65.2159 61.4564 67.2472 60.4103 68.5725 58.8259C70.0756 57.333 70.8475 55.2967 70.7562 53.0876C70.6749 51.0817 69.8624 49.1927 68.5421 47.7099L80.4198 37.6806C81.3085 36.9341 82.4308 36.5685 83.6089 36.6752C84.7768 36.7716 85.833 37.315 86.5744 38.1986C88.1232 40.037 87.8896 42.7995 86.0514 44.3534L84.5178 45.6534C83.6646 46.3745 83.5529 47.6593 84.2842 48.5174C85.0053 49.3705 86.285 49.4771 87.1431 48.756L87.1533 48.7459C88.0369 48.0096 89.1643 47.6592 90.317 47.7506C91.4849 47.8471 92.5462 48.3904 93.2928 49.2741C94.8467 51.1175 94.608 53.8749 92.7698 55.4288L89.5096 58.1862H89.5045C88.6514 58.9124 88.5397 60.1921 89.2659 61.0502C89.987 61.9084 91.2718 62.0151 92.1299 61.2889C93.0135 60.5373 94.1764 60.192 95.3088 60.2784C96.4768 60.3799 97.5279 60.9182 98.2744 61.8018C99.8232 63.6402 99.5896 66.4027 97.7513 67.9566L93.8005 71.2929C92.9423 72.014 92.8356 73.2988 93.5567 74.1569C94.2778 75.0151 95.5576 75.1268 96.4208 74.4007L96.4258 74.3956C97.3094 73.6491 98.4267 73.3038 99.6047 73.3901C100.773 73.4917 101.824 74.03 102.57 74.9186C103.322 75.8073 103.677 76.9347 103.581 78.0975C103.479 79.2655 102.941 80.3217 102.057 81.0683L83.5779 96.6475C76.0419 103.005 69.8317 102.335 60.4977 100.476C59.8883 100.349 59.2637 100.517 58.7914 100.918L30.9883 124.384C30.1301 125.106 30.0235 126.385 30.7496 127.249C31.1508 127.726 31.7246 127.97 32.3035 127.97C32.7656 127.97 33.2278 127.812 33.6137 127.492L60.6654 104.651C64.5196 105.393 68.049 105.911 71.4564 105.789L97.4005 127.497C97.7865 127.817 98.2435 127.97 98.7056 127.97C99.2845 127.97 99.8634 127.721 100.265 127.244C100.986 126.38 100.874 125.101 100.011 124.385L76.8238 104.981C79.9012 104.107 82.9735 102.482 86.198 99.7605L103.966 84.765L120.562 98.7751C120.943 99.1001 121.41 99.2525 121.872 99.2525C122.451 99.2525 123.025 99.0087 123.426 98.5314C124.147 97.6782 124.041 96.3935 123.183 95.6724ZM60.1991 40.4783C58.6604 39.1783 58.9397 36.8221 59.9858 35.258C60.5038 34.4862 62.4742 32.1146 66.2168 34.0494L74.0676 37.7158L65.5008 44.9521L60.2196 40.4935L60.2044 40.4834C60.2044 40.4834 60.2042 40.4783 60.1991 40.4783ZM42.4606 86.7557C41.7141 87.6444 40.663 88.1827 39.5001 88.2792C38.322 88.3858 37.2049 88.0202 36.3212 87.2737L28.963 81.0683C27.1247 79.5093 26.891 76.7468 28.445 74.9136C29.9837 73.0855 32.7106 72.8416 34.554 74.3651L41.9528 80.6011C42.8364 81.3476 43.3798 82.3987 43.4763 83.5667C43.5677 84.7397 43.2071 85.867 42.4606 86.7557ZM47.8586 74.5631C46.3047 76.4015 43.5473 76.6351 41.709 75.0913L37.2199 71.308C37.2149 71.3029 37.2098 71.2978 37.2047 71.2877L33.2539 67.9564C31.4155 66.4025 31.1819 63.6401 32.7257 61.8017C33.4773 60.9131 34.5335 60.3747 35.6965 60.2732C36.8645 60.1767 37.9918 60.5322 38.8805 61.2837C38.8855 61.2888 38.8906 61.2888 38.8957 61.2939L47.3254 68.4185C49.1688 69.9674 49.4024 72.7299 47.8586 74.5631ZM56.1106 64.7878C54.5567 66.6261 51.7942 66.8597 49.9559 65.3058L41.4755 58.1456C41.4755 58.1456 41.4704 58.1456 41.4653 58.1405L38.2305 55.4085C37.3469 54.662 36.8035 53.6108 36.7071 52.4429C36.6055 51.2749 36.9661 50.1426 37.7125 49.2589C38.459 48.3753 39.5153 47.8319 40.6781 47.7355C41.8258 47.6288 42.9632 47.9894 43.8469 48.7257L43.8672 48.7409L55.5874 58.6281C56.5523 59.4457 57.1616 60.6898 57.2175 61.9492C57.2581 63.0207 56.9079 63.9854 56.1106 64.7878ZM65.5915 56.0636C64.845 56.9472 63.7939 57.4906 62.626 57.5871C61.4529 57.6937 60.3307 57.3281 59.4471 56.5867C59.3455 56.5054 59.2592 56.5004 59.1729 56.5461C58.8682 56.1906 58.5584 55.8351 58.1979 55.5304L46.4776 45.6382C46.4674 45.6281 46.4623 45.6281 46.4522 45.6179L44.9338 44.3382C43.0955 42.7843 42.8618 40.0218 44.4057 38.1835C45.9595 36.3452 48.722 36.1116 50.5604 37.6554L53.3381 40.0015L53.3432 40.0066L57.756 43.7339L59.1221 44.8867L65.0685 49.909C66.0334 50.7215 66.6427 51.9656 66.6935 53.2351C66.7494 54.2965 66.3939 55.2511 65.5915 56.0636Z\"\n    [attr.fill]=\"color()\"\n  />\n  <path"
  },
  {
    "selector": "app-icon-hands-people-earth",
    "className": "IconHandsPeopleEarthComponent",
    "path": "shared/icons/icon-hands-people-earth/icon-hands-people-earth.component.ts",
    "inputs": [
      "color",
      "backgroundColor",
      "strokeWidth"
    ],
    "snippet": "<svg viewBox=\"0 0 131 131\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g clip-path=\"url(#clip0_8473_2281)\">\n    <g clip-path=\"url(#clip1_8473_2281)\">\n      <mask id=\"path-1-outside-1_8473_2281\" maskUnits=\"userSpaceOnUse\" x=\"0.833984\" y=\"1.25195\" width=\"100%\" height=\"100%\"\n            [attr.fill]=\"color()\">\n        <rect fill=\"white\" x=\"0.833984\" y=\"1.25195\" width=\"100%\" height=\"100%\" />"
  },
  {
    "selector": "app-icon-hash",
    "className": "IconHashComponent",
    "path": "shared/icons/icon-hash/icon-hash.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 24\" fill=\"none\">\n  <path d=\"M4.5 9H20.5M4.5 15H20.5M10.5 3L8.5 21M16.5 3L14.5 21\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-icon-help-circle",
    "className": "IconHelpCircleComponent",
    "path": "shared/icons/icon-help-circle/icon-help-circle.component.ts",
    "inputs": [
      "color",
      "strokeWidth"
    ],
    "snippet": "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g clip-path=\"url(#clip0_4039_11674)\">\n    <path\n      d=\"M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z\"\n      [attr.stroke]=\"color()\"\n      [attr.stroke-width]=\"strokeWidth()\""
  },
  {
    "selector": "app-icon-horizontal",
    "className": "IconHorizontalComponent",
    "path": "shared/icons/icon-horizontal/icon-horizontal.component.ts",
    "inputs": [],
    "snippet": "<svg viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g clip-path=\"url(#clip0_15503_62609)\">\n    <mask id=\"mask0_15503_62609\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\">\n      <rect width=\"100%\" height=\"100%\" [attr.fill]=\"fill()\"/>\n    </mask>\n    <g mask=\"url(#mask0_15503_62609)\">"
  },
  {
    "selector": "app-icon-ice-breaker",
    "className": "IconIceBreakerComponent",
    "path": "shared/icons/icon-ice-breaker/icon-ice-breaker.component.ts",
    "inputs": [],
    "snippet": ""
  },
  {
    "selector": "app-icon-info",
    "className": "IconInfoComponent",
    "path": "shared/icons/icon-info/icon-info.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"none\">\n  <g clip-path=\"url(#clip0_12845_622)\">\n    <path d=\"M8.00004 10.6667V8.00004M8.00004 5.33337H8.00671M14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8.00004C1.33337 4.31814 4.31814 1.33337 8.00004 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004Z\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </g>\n  <defs>\n    <clipPath id=\"clip0_12845_622\">"
  },
  {
    "selector": "app-icon-log-out",
    "className": "IconLogOutComponent",
    "path": "shared/icons/icon-log-out/icon-log-out.component.ts",
    "inputs": [
      "color",
      "strokeWidth"
    ],
    "snippet": "<svg viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5\"\n    [attr.stroke]=\"color()\"\n    [attr.stroke-width]=\"strokeWidth()\"\n    stroke-linecap=\"round\""
  },
  {
    "selector": "app-icon-long-arrow",
    "className": "IconLongArrowComponent",
    "path": "shared/icons/icon-long-arrow/icon-long-arrow.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 17\" fill=\"none\">\n  <path d=\"M8.00065 3.39526V12.7286M8.00065 12.7286L12.6673 8.06193M8.00065 12.7286L3.33398 8.06193\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-icon-maximaze",
    "className": "IconMaximazeComponent",
    "path": "shared/icons/icon-maximaze/icon-maximaze.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 24 24\" fill=\"none\">\n  <path d=\"M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-icon-minimize",
    "className": "IconMinimizeComponent",
    "path": "shared/icons/icon-minimize/icon-minimize.component.ts",
    "inputs": [],
    "snippet": "<svg  viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M4 14H10M10 14V20M10 14L3 21M20 10H14M14 10V4M14 10L21 3\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-icon-more-vertical",
    "className": "IconMoreVerticalComponent",
    "path": "shared/icons/icon-more-vertical/icon-more-vertical.component.ts",
    "inputs": [],
    "snippet": ""
  },
  {
    "selector": "app-icon-new-user",
    "className": "IconNewUserComponent",
    "path": "shared/icons/icon-new-user/icon-new-user.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 46 49\" fill=\"none\">\n  <path d=\"M34.4984 32.87H36.7908C38.0563 32.87 39.0811 33.8948 39.0811 35.1602C39.0811 36.4257 38.0563 37.4526 36.7908 37.4526H34.4984V39.745C34.4984 41.0105 33.4715 42.0353 32.206 42.0353C30.9406 42.0353 29.9158 41.0105 29.9158 39.745V37.4526H27.6234C26.3579 37.4526 25.331 36.4257 25.331 35.1602C25.331 33.8948 26.3579 32.87 27.6234 32.87H29.9158V30.5776C29.9158 29.3121 30.9406 28.2852 32.206 28.2852C33.4715 28.2852 34.4984 29.3121 34.4984 30.5776V32.87ZM18.3375 23.1696C18.214 23.3123 18.0217 23.3777 17.8392 23.33C12.92 22.0423 9.29081 17.5668 9.29081 12.245C9.29081 5.91556 14.4191 0.785156 20.7484 0.785156C27.0777 0.785156 32.206 5.91561 32.206 12.245C32.206 13.7751 31.9065 15.2341 31.3617 16.5695C31.2903 16.7445 31.1219 16.8589 30.9333 16.8718C25.9084 17.2146 21.4398 19.5848 18.3375 23.1696ZM16.805 44.8472C17.1953 45.5901 16.6503 46.62 15.8112 46.62L3.23646 46.62C1.25647 46.6601 0.0779923 45.05 0.0779923 43.7846L0.12318 35.1602C0.12318 30.0985 4.22667 25.995 9.29058 25.995H13.8732C14.4812 25.995 15.0634 26.2356 15.4931 26.6653L15.8003 26.9704C15.1823 28.2064 14.6992 29.5213 14.372 30.8964C14.2788 31.2884 13.7875 31.44 13.5024 31.1554L12.9236 30.5776H9.29058C6.75755 30.5776 4.70583 32.6294 4.70583 35.1602V42.0352C4.70583 42.0352 14.7684 41.9204 15.2053 42.0352C15.4968 42.1118 16.1043 43.5133 16.805 44.8472ZM20.7485 19.12C24.5447 19.12 27.6235 16.0412 27.6235 12.245C27.6235 8.44655 24.5447 5.36996 20.7485 5.36996C16.9522 5.36996 13.8735 8.44655 13.8735 12.245C13.8735 16.0412 16.9522 19.12 20.7485 19.12ZM32.2061 48.9102C24.6133 48.9102 18.4561 42.7551 18.4561 35.1602C18.4561 27.5674 24.6133 21.4102 32.2061 21.4102C39.801 21.4102 45.9561 27.5674 45.9561 35.1602C45.9561 42.7551 39.801 48.9102 32.2061 48.9102ZM32.2061 44.3276C37.2699 44.3276 41.3735 40.2241 41.3735 35.1602C41.3735 30.0985 37.27 25.995 32.2061 25.995C27.1444 25.995 23.0409 30.0985 23.0409 35.1602C23.0409 40.224 27.1444 44.3276 32.2061 44.3276Z\" fill=\"black\"/>\n</svg>"
  },
  {
    "selector": "app-icon-option",
    "className": "IconOptionComponent",
    "path": "shared/icons/icon-option/icon-option.component.ts",
    "inputs": [],
    "snippet": "<svg viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M11.1067 14.4997H14.2215C15.3954 18.422 19.0259 21.2856 23.3214 21.2856H36.8933C42.132 21.2856 46.3936 17.0241 46.3936 11.7853C46.3936 6.5466 42.132 2.28503 36.8933 2.28503H23.3214C19.0259 2.28503 15.3954 5.14869 14.2215 9.07096H11.1067C8.8606 9.07096 7.03519 7.24555 7.03519 4.9994C7.03519 3.49971 5.82051 2.28503 4.32082 2.28503C2.82113 2.28503 1.60645 3.49971 1.60645 4.9994C1.60645 10.2381 5.86801 14.4997 11.1067 14.4997ZM23.3214 7.71378H36.8933C39.1394 7.71378 40.9648 9.53919 40.9648 11.7853C40.9648 14.0315 39.1394 15.8569 36.8933 15.8569H23.3214C21.0753 15.8569 19.2499 14.0315 19.2499 11.7853C19.2499 9.53919 21.0753 7.71378 23.3214 7.71378Z\"\n    [attr.fill]=\"color()\" />\n  <path\n    d=\"M11.1067 38.9291H21.0074C22.1814 42.8513 25.8118 45.715 30.1073 45.715H36.8933C42.132 45.715 46.3936 41.4534 46.3936 36.2147C46.3936 30.976 42.132 26.7144 36.8933 26.7144H30.1073C25.8118 26.7144 22.1814 29.5781 21.0074 33.5003H11.1067C8.8606 33.5003 7.03519 31.6749 7.03519 29.4288V22.6428C7.03519 21.1431 5.82051 19.9285 4.32082 19.9285C2.82113 19.9285 1.60645 21.1431 1.60645 22.6428V29.4288C1.60645 34.6675 5.86801 38.9291 11.1067 38.9291ZM30.1073 32.1431H36.8933C39.1394 32.1431 40.9648 33.9685 40.9648 36.2147C40.9648 38.4608 39.1394 40.2862 36.8933 40.2862H30.1073C27.8612 40.2862 26.0358 38.4608 26.0358 36.2147C26.0358 33.9685 27.8612 32.1431 30.1073 32.1431Z\""
  },
  {
    "selector": "app-icon-org-chat",
    "className": "IconOrgChatComponent",
    "path": "shared/icons/icon-org-chat/icon-org-chat.component.ts",
    "inputs": [
      "color"
    ],
    "snippet": "<svg viewBox=\"0 0 25 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M19.8516 11.0694H18.8352C18.0493 11.0697 17.2854 11.3296 16.6624 11.8086C16.3641 11.2254 15.9103 10.736 15.3512 10.3945C14.7921 10.053 14.1495 9.87267 13.4944 9.87349H11.4193C10.7642 9.87267 10.1216 10.053 9.56254 10.3945C9.00347 10.736 8.54968 11.2254 8.25132 11.8086C7.6283 11.3296 6.86449 11.0697 6.07859 11.0694H5.06746C4.12006 11.0708 3.21179 11.4474 2.54138 12.1168C1.87098 12.7863 1.49303 13.694 1.49023 14.6414V19.4224C1.49093 19.6607 1.58609 19.889 1.75484 20.0573C1.9236 20.2256 2.15218 20.32 2.39048 20.32H7.86324V21.3153C7.86324 21.4332 7.88646 21.5499 7.93156 21.6588C7.97667 21.7677 8.04279 21.8667 8.12614 21.95C8.20949 22.0334 8.30844 22.0995 8.41735 22.1446C8.52625 22.1897 8.64297 22.2129 8.76085 22.2129H16.1555C16.2734 22.2129 16.3901 22.1897 16.499 22.1446C16.6079 22.0995 16.7069 22.0334 16.7902 21.95C16.8736 21.8667 16.9397 21.7677 16.9848 21.6588C17.0299 21.5499 17.0531 21.4332 17.0531 21.3153V20.32H22.5285C22.7668 20.32 22.9954 20.2256 23.1642 20.0573C23.3329 19.889 23.4281 19.6607 23.4288 19.4224V14.6414C23.426 13.694 23.048 12.7863 22.3776 12.1168C21.7072 11.4474 20.799 11.0708 19.8516 11.0694ZM3.28809 18.5222V14.6414C3.29018 14.1708 3.47857 13.7203 3.81204 13.3883C4.14552 13.0563 4.59691 12.8699 5.06746 12.8699H6.08387C6.55442 12.8699 7.00581 13.0563 7.33928 13.3883C7.67275 13.7203 7.86114 14.1708 7.86324 14.6414V18.5222H3.28809ZM15.2579 20.4151H9.66109V13.4296C9.66179 12.9635 9.84726 12.5167 10.1768 12.1871C10.5064 11.8575 10.9532 11.672 11.4193 11.6713H13.4997C13.9658 11.672 14.4126 11.8575 14.7422 12.1871C15.0718 12.5167 15.2572 12.9635 15.2579 13.4296V20.4151ZM21.6309 18.5222H17.0558V14.6414C17.0565 14.1699 17.2443 13.718 17.5779 13.3849C17.9115 13.0517 18.3637 12.8646 18.8352 12.8646H19.8516C20.323 12.8646 20.7752 13.0517 21.1088 13.3849C21.4425 13.718 21.6302 14.1699 21.6309 14.6414V18.5222ZM12.4595 9.27948C13.2004 9.27948 13.9247 9.05977 14.5408 8.64814C15.1568 8.2365 15.637 7.65143 15.9205 6.9669C16.2041 6.28237 16.2783 5.52914 16.1337 4.80245C15.9892 4.07576 15.6324 3.40826 15.1085 2.88434C14.5846 2.36043 13.917 2.00364 13.1904 1.85909C12.4637 1.71455 11.7104 1.78873 11.0259 2.07227C10.3414 2.35581 9.75631 2.83597 9.34467 3.45203C8.93303 4.06808 8.71333 4.79237 8.71333 5.5333C8.71472 6.52642 9.10986 7.47846 9.8121 8.18071C10.5143 8.88295 11.4664 9.27809 12.4595 9.27948ZM12.4595 3.5876C12.8451 3.58708 13.2221 3.70097 13.5429 3.91486C13.8637 4.12874 14.1139 4.433 14.2617 4.78912C14.4095 5.14524 14.4483 5.5372 14.3732 5.91539C14.2981 6.29358 14.1125 6.64098 13.8398 6.91362C13.5672 7.18625 13.2198 7.37187 12.8416 7.44696C12.4634 7.52205 12.0715 7.48325 11.7153 7.33546C11.3592 7.18766 11.055 6.93753 10.8411 6.61673C10.6272 6.29592 10.5133 5.91887 10.5138 5.5333C10.5145 5.01748 10.7197 4.52299 11.0845 4.15826C11.4492 3.79352 11.9437 3.5883 12.4595 3.5876ZM19.342 10.7553C20.0054 10.7558 20.654 10.5595 21.2058 10.1913C21.7575 9.82309 22.1877 9.29948 22.4418 8.68672C22.6959 8.07396 22.7625 7.39961 22.6332 6.74898C22.5039 6.09835 22.1845 5.50069 21.7155 5.03163C21.2464 4.56257 20.6488 4.24319 19.9981 4.1139C19.3475 3.98462 18.6731 4.05124 18.0604 4.30533C17.4476 4.55943 16.924 4.98958 16.5558 5.54135C16.1876 6.09312 15.9913 6.74172 15.9919 7.40507C15.9939 8.29295 16.3476 9.14387 16.9754 9.7717C17.6032 10.3995 18.4542 10.7532 19.342 10.7553ZM19.342 5.8501C19.6497 5.84958 19.9506 5.94033 20.2067 6.11087C20.4627 6.28142 20.6624 6.52409 20.7805 6.80818C20.8986 7.09226 20.9298 7.405 20.8701 7.70681C20.8104 8.00862 20.6625 8.28593 20.4451 8.50366C20.2278 8.7214 19.9507 8.86975 19.649 8.92997C19.3473 8.99018 19.0345 8.95954 18.7502 8.84193C18.4659 8.72431 18.2229 8.52501 18.052 8.26924C17.881 8.01347 17.7897 7.71273 17.7897 7.40507C17.7897 6.99312 17.9532 6.59801 18.2442 6.30647C18.5353 6.01493 18.9301 5.8508 19.342 5.8501ZM5.57698 4.05225C4.91375 4.05172 4.26525 4.24792 3.71354 4.61602C3.16182 4.98411 2.73167 5.50757 2.4775 6.12017C2.22332 6.73277 2.15655 7.407 2.28562 8.05755C2.41469 8.70811 2.73381 9.30577 3.20261 9.77494C3.6714 10.2441 4.26881 10.5637 4.91927 10.6933C5.56972 10.8229 6.244 10.7566 6.8568 10.5029C7.4696 10.2492 7.9934 9.8195 8.36193 9.26807C8.73046 8.71665 8.92717 8.06831 8.92717 7.40507C8.92577 6.51673 8.57244 5.66514 7.94454 5.03674C7.31664 4.40834 6.46532 4.05434 5.57698 4.05225ZM5.57698 8.9574C5.26921 8.95792 4.96821 8.8671 4.7121 8.69644C4.45598 8.52578 4.25626 8.28295 4.13824 7.99871C4.02023 7.71447 3.98921 7.4016 4.04912 7.09972C4.10904 6.79784 4.25719 6.52053 4.47481 6.3029C4.69244 6.08528 4.96975 5.93713 5.27163 5.87721C5.57351 5.8173 5.88638 5.84831 6.17063 5.96633C6.45487 6.08435 6.69769 6.28406 6.86835 6.54018C7.03902 6.7963 7.12984 7.0973 7.12931 7.40507C7.12862 7.81656 6.96484 8.211 6.67388 8.50196C6.38291 8.79293 5.98847 8.9567 5.57698 8.9574Z\"\n    [attr.fill]=\"color()\"\n  />\n</svg>"
  },
  {
    "selector": "app-icon-people",
    "className": "IconPeopleComponent",
    "path": "shared/icons/icon-people/icon-people.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"none\">\n  <g clip-path=\"url(#clip0_14008_7868)\">\n    <path d=\"M14.1666 17.5V15.8333C14.1666 14.9493 13.8155 14.1014 13.1903 13.4763C12.5652 12.8512 11.7174 12.5 10.8333 12.5H4.16665C3.28259 12.5 2.43474 12.8512 1.80962 13.4763C1.1845 14.1014 0.833313 14.9493 0.833313 15.8333V17.5M19.1666 17.5V15.8333C19.1661 15.0948 18.9203 14.3773 18.4678 13.7936C18.0153 13.2099 17.3818 12.793 16.6666 12.6083M13.3333 2.60833C14.0503 2.79192 14.6858 3.20892 15.1397 3.79359C15.5935 4.37827 15.8398 5.09736 15.8398 5.8375C15.8398 6.57764 15.5935 7.29673 15.1397 7.88141C14.6858 8.46608 14.0503 8.88308 13.3333 9.06667M10.8333 5.83333C10.8333 7.67428 9.34093 9.16667 7.49998 9.16667C5.65903 9.16667 4.16665 7.67428 4.16665 5.83333C4.16665 3.99238 5.65903 2.5 7.49998 2.5C9.34093 2.5 10.8333 3.99238 10.8333 5.83333Z\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </g>\n  <defs>\n    <clipPath id=\"clip0_14008_7868\">"
  },
  {
    "selector": "app-icon-play",
    "className": "IconPlayComponent",
    "path": "shared/icons/icon-play/icon-play.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\">\n  <path d=\"M5 3L19 12L5 21V3Z\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-icon-public-profile",
    "className": "IconPublicProfileComponent",
    "path": "shared/icons/icon-public-profile/icon-public-profile.component.ts",
    "inputs": [
      "color"
    ],
    "snippet": "<svg viewBox=\"0 0 25 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g clip-path=\"url(#clip0_3104_8413)\">\n    <path\n      d=\"M12.0592 1.03979C9.01447 1.03979 6.09447 2.2493 3.94154 4.40223C1.78861 6.55516 0.579102 9.47516 0.579102 12.5199C0.64288 20.0266 6.35103 23.9999 12.0592 23.9999C17.7673 23.9999 23.4818 20.0202 23.5392 12.5199C23.5392 9.47516 22.3297 6.55516 20.1768 4.40223C18.0239 2.2493 15.1039 1.03979 12.0592 1.03979V1.03979ZM6.25536 20.9003C6.60158 19.6262 7.35745 18.5014 8.40634 17.6995C9.45524 16.8976 10.7389 16.4632 12.0592 16.4632C13.3795 16.4632 14.6631 16.8976 15.712 17.6995C16.7609 18.5014 17.5168 19.6262 17.863 20.9003C16.1604 22.0875 14.1348 22.724 12.0592 22.724C9.98358 22.724 7.95791 22.0875 6.25536 20.9003ZM8.48759 11.6206C8.48759 10.9142 8.69706 10.2237 9.08951 9.63633C9.48196 9.04899 10.0398 8.59121 10.6924 8.32089C11.345 8.05056 12.0631 7.97983 12.756 8.11764C13.4488 8.25545 14.0852 8.59561 14.5847 9.09511C15.0842 9.5946 15.4243 10.231 15.5621 10.9238C15.6999 11.6166 15.6292 12.3348 15.3589 12.9874C15.0886 13.64 14.6308 14.1978 14.0434 14.5902C13.4561 14.9827 12.7656 15.1922 12.0592 15.1922C11.1119 15.1922 10.2035 14.8159 9.53368 14.1461C8.86388 13.4763 8.48759 12.5678 8.48759 11.6206ZM18.9281 20.0457C18.5714 19.0621 18.0083 18.1662 17.2768 17.4182C16.5453 16.6702 15.6622 16.0873 14.6868 15.7088C15.5663 15.1414 16.2385 14.3047 16.6029 13.3236C16.9674 12.3426 17.0045 11.2699 16.7088 10.266C16.4131 9.26211 15.8004 8.38088 14.9623 7.75407C14.1242 7.12725 13.1057 6.78853 12.0592 6.78853C11.0126 6.78853 9.99416 7.12725 9.15608 7.75407C8.31799 8.38088 7.70529 9.26211 7.40956 10.266C7.11384 11.2699 7.15098 12.3426 7.51544 13.3236C7.87989 14.3047 8.55208 15.1414 9.43151 15.7088C8.45614 16.0873 7.57304 16.6702 6.84152 17.4182C6.11 18.1662 5.54698 19.0621 5.19026 20.0457C3.6675 18.6597 2.59966 16.8454 2.12707 14.8412C1.65448 12.8371 1.79924 10.7369 2.54233 8.81654C3.28542 6.8962 4.59208 5.24558 6.29061 4.08158C7.98914 2.91758 10.0001 2.29466 12.0592 2.29466C14.1183 2.29466 16.1292 2.91758 17.8277 4.08158C19.5263 5.24558 20.8329 6.8962 21.576 8.81654C22.3191 10.7369 22.4639 12.8371 21.9913 14.8412C21.5187 16.8454 20.4508 18.6597 18.9281 20.0457Z\"\n      [attr.fill]=\"color()\"\n      [attr.stroke]=\"color()\""
  },
  {
    "selector": "app-icon-pull-request",
    "className": "IconPullRequestComponent",
    "path": "shared/icons/icon-pull-request/icon-pull-request.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"none\">\n  <g clip-path=\"url(#clip0_14008_4194)\">\n    <path d=\"M8.04573 2.86658C7.80776 3.10454 7.80776 3.49036 8.04573 3.7283L9.87372 5.55629C10.048 5.73056 10.3101 5.78268 10.5378 5.68839C10.7654 5.59407 10.9139 5.37188 10.9139 5.12543V3.90677H12.7419C14.4245 3.90677 15.7885 5.27082 15.7885 6.95342V13.724C14.5674 14.0011 13.6559 15.0931 13.6559 16.398C13.6559 17.9124 14.8835 19.14 16.3979 19.14C17.9122 19.14 19.1399 17.9124 19.1399 16.398C19.1399 15.0931 18.2283 14.0011 17.0072 13.724V6.95342C17.0072 4.59775 15.0976 2.68811 12.7419 2.68811H10.9139V1.46945C10.9139 1.223 10.7654 1.00082 10.5378 0.906507C10.3101 0.812195 10.048 0.864327 9.87372 1.03859L8.04573 2.86658Z\"\n          [attr.fill]=\"fill()\"/>\n    <path d=\"M4.2113 6.27613C5.43239 5.99904 6.34395 4.90703 6.34395 3.60209C6.34395 2.08773 5.11633 0.860107 3.60197 0.860107C2.08761 0.860107 0.859985 2.08773 0.859985 3.60209C0.859985 4.90703 1.77155 5.99904 2.99264 6.27613V13.724C1.77155 14.0011 0.859985 15.0931 0.859985 16.398C0.859985 17.9124 2.08761 19.14 3.60197 19.14C5.11633 19.14 6.34395 17.9124 6.34395 16.398C6.34395 15.0931 5.43239 14.0011 4.2113 13.724V6.27613Z\" [attr.fill]=\"fill()\"/>\n  </g>"
  },
  {
    "selector": "app-icon-recommended",
    "className": "IconRecommendedComponent",
    "path": "shared/icons/icon-recommended/icon-recommended.component.ts",
    "inputs": [
      "fill",
      "color"
    ],
    "snippet": "<svg viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g clip-path=\"url(#clip0_9738_50626)\">\n    <path\n      d=\"M23.3538 0.015496C36.4811 -0.454894 47.533 9.84141 48 23.0646C48 23.3782 48 23.6395 48 23.9531V44.9638C48 46.5841 46.7028 47.943 45.0943 47.9953H24.2359C11.1085 48.2566 0.212288 37.6989 0.00474167 24.4758C-0.254692 11.2003 10.1745 0.276824 23.3538 0.015496ZM14.1698 27.3504L23.5094 36.7582C23.9245 37.1763 24.5991 37.1763 25.0142 36.7582L34.25 27.4549C36.8962 24.7894 37.1038 20.4513 34.5613 17.6812C31.9151 14.8066 27.401 14.7544 24.651 17.5244L24.2877 17.8903L23.9245 17.5244C21.2264 14.8066 16.8679 14.8066 14.2217 17.5244C11.5755 20.2423 11.4717 24.6326 14.1698 27.3504Z\"\n      [attr.fill]=\"fill()\" />\n  </g>"
  },
  {
    "selector": "app-icon-render",
    "className": "IconRenderComponent",
    "path": "shared/icons/_base/icon-render/icon-render.component.ts",
    "inputs": [
      "icon",
      "componentIconInputs"
    ],
    "snippet": "@if (parsedIcon()) {\n  @if (parsedIcon().isTemplateRef()) {\n    <ng-container *ngTemplateOutlet=\"parsedIcon().icon\"></ng-container>\n  } @else if (parsedIcon().isImgSrc()) {\n    <img\n      width=\"100%\""
  },
  {
    "selector": "app-icon-robot",
    "className": "IconRobotComponent",
    "path": "shared/icons/icon-robot/icon-robot.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\" fill=\"none\">\n    <g clip-path=\"url(#clip0_14912_6395)\">\n        <path\n            d=\"M19.5843 20.1214H4.46435C4.19435 20.1214 3.83406 19.9417 3.74463 19.6717C2.66463 17.9614 2.12463 16.0714 2.12463 14.092C2.12463 8.51139 6.53406 3.92139 12.0243 3.92139C17.5146 3.92139 21.9241 8.51139 21.9241 14.0911C21.9241 16.0714 21.3841 17.9614 20.3041 19.6708C20.1243 19.9417 19.8543 20.1214 19.5843 20.1214ZM5.00435 18.3217H19.0443C19.7641 17.062 20.1243 15.6217 20.1243 14.092C20.1243 9.50196 16.5241 5.72196 12.0243 5.72196C7.52463 5.72196 3.92435 9.50196 3.92435 14.092C3.92435 15.6217 4.28463 17.062 5.00435 18.3217Z\"\n            [attr.fill]=\"fill()\" />\n        <path"
  },
  {
    "selector": "app-icon-settings",
    "className": "IconSettingsComponent",
    "path": "shared/icons/icon-settings/icon-settings.component.ts",
    "inputs": [],
    "snippet": "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M9.2502 22L8.8502 18.8C8.63353 18.7167 8.42936 18.6167 8.2377 18.5C8.04603 18.3833 7.85853 18.2583 7.6752 18.125L4.7002 19.375L1.9502 14.625L4.5252 12.675C4.50853 12.5583 4.5002 12.4458 4.5002 12.3375V11.6625C4.5002 11.5542 4.50853 11.4417 4.5252 11.325L1.9502 9.375L4.7002 4.625L7.6752 5.875C7.85853 5.74167 8.0502 5.61667 8.2502 5.5C8.4502 5.38333 8.6502 5.28333 8.8502 5.2L9.2502 2H14.7502L15.1502 5.2C15.3669 5.28333 15.571 5.38333 15.7627 5.5C15.9544 5.61667 16.1419 5.74167 16.3252 5.875L19.3002 4.625L22.0502 9.375L19.4752 11.325C19.4919 11.4417 19.5002 11.5542 19.5002 11.6625V12.3375C19.5002 12.4458 19.4835 12.5583 19.4502 12.675L22.0252 14.625L19.2752 19.375L16.3252 18.125C16.1419 18.2583 15.9502 18.3833 15.7502 18.5C15.5502 18.6167 15.3502 18.7167 15.1502 18.8L14.7502 22H9.2502ZM12.0502 15.5C13.0169 15.5 13.8419 15.1583 14.5252 14.475C15.2085 13.7917 15.5502 12.9667 15.5502 12C15.5502 11.0333 15.2085 10.2083 14.5252 9.525C13.8419 8.84167 13.0169 8.5 12.0502 8.5C11.0669 8.5 10.2377 8.84167 9.5627 9.525C8.8877 10.2083 8.5502 11.0333 8.5502 12C8.5502 12.9667 8.8877 13.7917 9.5627 14.475C10.2377 15.1583 11.0669 15.5 12.0502 15.5Z\" [attr.fill]=\"fill()\"/>\n</svg>"
  },
  {
    "selector": "app-icon-settings-gear",
    "className": "IconSettingsGearComponent",
    "path": "shared/icons/icon-settings-gear/icon-settings-gear.component.ts",
    "inputs": [
      "color",
      "strokeWidth"
    ],
    "snippet": "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g clip-path=\"url(#clip0_4039_12046)\">\n    <path\n      d=\"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z\"\n      [attr.stroke]=\"color()\"\n      [attr.stroke-width]=\"strokeWidth()\""
  },
  {
    "selector": "app-icon-shake-hands",
    "className": "IconShakeHandsComponent",
    "path": "shared/icons/icon-shake-hands/icon-shake-hands.component.ts",
    "inputs": [
      "color",
      "backgroundColor"
    ],
    "snippet": "<svg viewBox=\"0 0 131 131\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g clip-path=\"url(#clip0_8473_2272)\">\n    <path\n      d=\"M69.9762 66.7503C70.0168 66.7198 70.0625 66.6944 70.1031 66.6741C70.4484 66.4862 70.8547 66.4405 71.2305 66.5573C71.6062 66.669 71.9262 66.928 72.109 67.2733L72.1699 67.385L83.3926 87.6364L84.3523 87.3978V66.811L75.5824 59.6255C75.3082 59.397 74.9883 59.2192 74.6429 59.1177C74.2925 59.0161 73.932 58.9857 73.5714 59.0314L67.4828 59.7169C67.1984 59.7474 66.9191 59.8134 66.6601 59.9251L66.6043 59.9556C66.3351 60.0927 66.0863 60.2704 65.873 60.4888L56.7426 69.6192C56.1383 70.3454 55.9301 71.3153 56.1738 72.2243C56.2551 72.6305 56.4277 73.0165 56.6715 73.3465C56.8645 73.6157 57.1336 73.8239 57.4434 73.9356C58.5707 74.159 59.7386 73.8391 60.5918 73.0672L69.9813 66.7399L69.9762 66.7503ZM110.697 90.2465V85.4578C110.723 84.6554 111.383 84.0156 112.185 84.0156C112.988 84.0156 113.648 84.6554 113.668 85.4578V90.2465H120.523V85.4578C120.523 84.6402 121.189 83.975 122.011 83.975C122.829 83.975 123.494 84.6403 123.494 85.4578V90.2465H125.195L125.2 86.7477C125.18 82.8477 122.021 79.689 118.121 79.6738H116.065C112.17 79.6942 109.016 82.8477 108.996 86.7477V90.2465H110.697ZM117.096 68.3908C115.11 68.3857 113.399 69.7923 113.008 71.7372C112.622 73.6872 113.663 75.6423 115.501 76.404C117.335 77.1606 119.452 76.5208 120.559 74.8703C121.661 73.2149 121.448 71.0161 120.041 69.6094C119.264 68.8223 118.203 68.3857 117.096 68.3908ZM112.048 67.5021L112.053 67.5072C114.841 64.7751 119.305 64.7955 122.072 67.5478C124.84 70.3001 124.881 74.7689 122.164 77.572C125.795 79.1817 128.146 82.7719 128.166 86.7481V91.7297C128.161 92.5524 127.501 93.2176 126.678 93.2176H107.519C106.701 93.2176 106.036 92.5523 106.036 91.7297V86.7481C106.051 82.7719 108.402 79.1817 112.033 77.5669C109.271 74.779 109.281 70.2797 112.054 67.502L112.048 67.5021ZM6.79369 90.2417V85.453C6.81908 84.6507 7.47417 84.0159 8.27647 84.0159C9.07882 84.0159 9.73391 84.6506 9.75926 85.453V90.2417H16.6147V85.453C16.635 84.6507 17.2951 84.0108 18.0975 84.0108C18.8998 84.0108 19.56 84.6506 19.5853 85.453V90.2417H21.2865V86.7479C21.2662 82.8479 18.1127 79.6944 14.2177 79.6741H12.1611C8.26114 79.6893 5.10252 82.8479 5.09238 86.7479V90.2467L6.79369 90.2417ZM13.1871 68.3757C11.1965 68.3757 9.48509 69.7772 9.09925 71.7272C8.70823 73.6772 9.75433 75.6272 11.5876 76.3889C13.4259 77.1506 15.5435 76.5057 16.6454 74.8553C17.7524 73.1999 17.534 71.001 16.1274 69.5943C15.3454 68.8123 14.289 68.3757 13.1871 68.3757ZM8.14452 67.4972C10.9273 64.7093 15.4418 64.6992 18.2297 67.4769C21.0226 70.2596 21.0327 74.7741 18.25 77.562C21.891 79.1718 24.2422 82.7721 24.2523 86.7483V91.7299C24.2523 92.5475 23.5871 93.2127 22.7645 93.2127H3.60508H3.61016C3.21406 93.2127 2.83828 93.0603 2.55391 92.7811C2.27462 92.5018 2.11719 92.1209 2.11719 91.7299V86.7483C2.11719 84.0823 3.17852 81.5331 5.06754 79.6542C5.94605 78.7757 6.98205 78.0697 8.11448 77.562C5.35705 74.7691 5.37183 70.2749 8.14452 67.4972ZM60.4083 125.235V120.858C60.3981 120.457 60.5505 120.066 60.8298 119.776C61.1091 119.487 61.495 119.324 61.8962 119.324C62.2974 119.324 62.6833 119.487 62.9626 119.776C63.2419 120.066 63.3942 120.457 63.379 120.858V125.235H69.5844V120.858C69.5844 120.035 70.2496 119.37 71.0723 119.37C71.8898 119.37 72.555 120.035 72.555 120.858V125.235H73.9414L73.9464 122.067C73.9363 118.481 71.0265 115.572 67.4414 115.567H65.5218C61.9316 115.567 59.0218 118.476 59.0218 122.067V125.235H60.4083ZM66.4818 105.019C64.415 105.054 62.7595 106.735 62.7595 108.802C62.7544 110.864 64.4098 112.555 66.4716 112.595H66.4919C67.5127 112.611 68.4928 112.22 69.219 111.504C69.9401 110.793 70.3514 109.818 70.3463 108.797C70.3463 107.781 69.935 106.807 69.2088 106.096C68.4776 105.385 67.4975 104.993 66.4818 105.019ZM61.7083 104.029C64.3184 101.408 68.5587 101.378 71.2095 103.963C73.8552 106.547 73.9314 110.783 71.3771 113.464C74.7438 115.002 76.9071 118.364 76.9173 122.066V126.723C76.9173 127.54 76.252 128.205 75.4294 128.205H57.5388C56.7162 128.205 56.051 127.54 56.051 126.723V122.066C56.0611 118.369 58.2194 115.007 61.581 113.464C59.0572 110.803 59.1134 106.618 61.7083 104.029ZM94.289 125.234V120.446C94.2738 120.044 94.4261 119.659 94.7054 119.369C94.9847 119.08 95.3707 118.917 95.7718 118.917C96.173 118.917 96.5539 119.08 96.8332 119.369C97.1125 119.659 97.2648 120.044 97.2547 120.446V125.234H104.115V120.446C104.1 120.044 104.252 119.659 104.532 119.369C104.811 119.08 105.197 118.917 105.598 118.917C105.999 118.917 106.385 119.08 106.664 119.369C106.944 119.659 107.091 120.044 107.081 120.446V125.234H108.782V121.741C108.767 117.841 105.608 114.682 101.713 114.662H99.6566C95.7566 114.682 92.603 117.841 92.5878 121.741V125.239L94.289 125.234ZM100.682 103.368C98.6969 103.373 96.9907 104.775 96.6047 106.725C96.2188 108.67 97.2649 110.62 99.0981 111.376C100.931 112.138 103.049 111.493 104.151 109.843C105.253 108.192 105.034 105.994 103.633 104.587C102.851 103.805 101.789 103.363 100.682 103.368ZM95.6449 102.485C98.4277 99.7374 102.907 99.7526 105.679 102.51C108.452 105.273 108.482 109.751 105.75 112.55C109.391 114.154 111.743 117.755 111.748 121.736V126.712C111.748 127.103 111.595 127.484 111.316 127.764C111.042 128.043 110.661 128.2 110.27 128.2H91.1002C90.7092 128.2 90.3334 128.043 90.0541 127.764C89.7748 127.484 89.6225 127.103 89.6225 126.712V121.741C89.6326 117.76 91.9838 114.159 95.6248 112.55C92.8573 109.762 92.8621 105.262 95.6449 102.485ZM25.8869 125.235V120.446C25.8869 119.628 26.5471 118.963 27.3646 118.963C28.1873 118.963 28.8474 119.628 28.8474 120.446V125.235H35.7079V120.446H35.713C35.713 119.628 36.3731 118.963 37.1958 118.963C38.0133 118.963 38.6735 119.628 38.6735 120.446V125.235H40.3747L40.3797 121.741C40.3594 117.841 37.2059 114.682 33.3059 114.662H31.2544C27.3493 114.677 24.1907 117.836 24.1806 121.741V125.24L25.8869 125.235ZM32.2752 103.369C30.2898 103.374 28.5835 104.775 28.1975 106.725C27.8167 108.67 28.8577 110.62 30.696 111.377C32.5293 112.139 34.6418 111.494 35.7436 109.843C36.8456 108.193 36.6323 105.994 35.2257 104.587C34.4487 103.805 33.3822 103.364 32.2752 103.369ZM27.2378 102.485C30.0205 99.7378 34.4994 99.753 37.2722 102.511C40.0448 105.273 40.0753 109.752 37.3433 112.55C40.9843 114.155 43.3355 117.755 43.3406 121.736V126.713C43.3457 127.104 43.1882 127.485 42.9089 127.764C42.6347 128.043 42.2589 128.201 41.8628 128.201H22.6982C21.8807 128.196 21.2155 127.536 21.2155 126.718V121.741C21.2307 117.76 23.5819 114.165 27.2128 112.55C24.4503 109.762 24.46 105.263 27.2378 102.485ZM25.8869 54.6997V49.911H25.8818C25.8818 49.0884 26.5471 48.4283 27.3646 48.4283C28.1822 48.4283 28.8474 49.0884 28.8474 49.911V54.6997H35.7079V49.911C35.7079 49.0884 36.3731 48.4283 37.1907 48.4283C38.0082 48.4283 38.6735 49.0884 38.6735 49.911V54.6997H40.3746L40.3797 51.2009C40.3594 47.306 37.2059 44.1524 33.3059 44.1322H31.2544C27.3544 44.1423 24.1958 47.3009 24.1805 51.2009V54.6997H25.8869ZM32.2752 32.8389C29.9749 32.8389 28.1112 34.7026 28.1112 37.0029C28.1112 39.2982 29.9749 41.1619 32.2752 41.1619C34.5756 41.1619 36.4393 39.2982 36.4393 37.0029C36.4393 34.7026 34.5756 32.8389 32.2752 32.8389ZM27.2378 31.9553C30.0205 29.2131 34.4994 29.2283 37.2722 31.9858C40.045 34.7433 40.0753 39.2221 37.3433 42.0202C40.9793 43.63 43.3304 47.2253 43.3406 51.2015V56.1882C43.3457 56.5792 43.1882 56.9549 42.914 57.2342C42.6347 57.5135 42.2589 57.671 41.8629 57.671H22.6983C21.8756 57.671 21.2155 57.0057 21.2155 56.1882V51.2015C21.2358 47.2304 23.5819 43.6351 27.2128 42.0203C24.4553 39.2274 24.4655 34.7331 27.2432 31.9554L27.2378 31.9553ZM94.2892 54.7001V49.9114C94.3146 49.1091 94.9696 48.4743 95.7719 48.4743C96.5742 48.4743 97.2294 49.1091 97.2547 49.9114V54.7001H104.115V49.9114C104.141 49.1091 104.796 48.4743 105.598 48.4743C106.4 48.4743 107.055 49.1091 107.081 49.9114V54.7001H108.782V51.2013C108.762 47.3064 105.608 44.1528 101.708 44.1326H99.6566C95.7617 44.1529 92.6031 47.3064 92.5878 51.2013V54.7001H94.2892ZM100.683 32.8393C98.6971 32.8444 96.9908 34.251 96.6048 36.1959C96.2189 38.1459 97.265 40.0909 99.0982 40.8525C100.932 41.6092 103.049 40.9642 104.151 39.3138C105.253 37.6635 105.035 35.4647 103.633 34.063C102.851 33.2759 101.79 32.8393 100.683 32.8393ZM95.6451 31.9557H95.64C98.4278 29.2135 102.907 29.2287 105.679 31.9862C108.447 34.7436 108.483 39.2225 105.751 42.0206C109.387 43.6304 111.738 47.2257 111.748 51.2019V56.1886C111.748 56.5796 111.596 56.9604 111.316 57.2347C111.037 57.5139 110.661 57.6714 110.27 57.6714H91.1003C90.7093 57.6714 90.3285 57.514 90.0542 57.2347C89.7749 56.9604 89.6226 56.5796 89.6226 56.1886V51.2019C89.6328 47.2257 91.9839 43.6304 95.625 42.0206C92.8574 39.2328 92.8673 34.7334 95.6451 31.9557ZM58.3871 20.5706C58.3871 21.3882 57.7218 22.0534 56.8992 22.0534C56.0766 22.0534 55.4114 21.3881 55.4114 20.5706C55.4164 14.4566 60.3676 9.50537 66.4816 9.49523C67.2992 9.49523 67.9644 10.1605 67.9644 10.9831C67.9644 11.8007 67.2992 12.4659 66.4816 12.4659C64.3286 12.4659 62.2719 13.319 60.7484 14.8373C59.23 16.3608 58.382 18.4225 58.3871 20.5706ZM55.33 36.74H56.4624C56.4319 36.2474 56.31 35.7701 56.1069 35.3232C55.8479 34.7646 55.4671 34.267 54.9897 33.8709C49.3073 29.0518 47.2355 21.1959 49.8049 14.2032C52.3745 7.21061 59.0319 2.55908 66.4813 2.55908C73.9361 2.55908 80.5928 7.21061 83.1629 14.2032C85.7275 21.1958 83.6606 29.0518 77.9781 33.8709C77.5008 34.267 77.1199 34.7646 76.8559 35.3232C76.6477 35.7701 76.5258 36.2475 76.5004 36.74H77.6379H77.6328C79.7098 36.74 81.3856 38.4209 81.3856 40.4927C81.3856 42.5645 79.7097 44.2454 77.6328 44.2454H76.475H76.4801C76.3938 46.363 75.1343 48.2571 73.2149 49.1559C72.7426 52.5125 69.8735 55.011 66.4864 55.011C63.0992 55.011 60.225 52.5125 59.7578 49.1559C59.1637 48.8766 58.6203 48.4957 58.1531 48.0285C57.1426 47.0231 56.5484 45.6723 56.4926 44.2453H55.3297C53.2578 44.2453 51.577 42.5644 51.577 40.4926C51.577 38.4208 53.2582 36.74 55.33 36.74ZM59.433 36.74H73.525C73.6063 34.7494 74.5305 32.8908 76.0691 31.6212C80.7867 27.6045 82.5031 21.0689 80.3602 15.249C78.2223 9.42945 72.6769 5.56507 66.4814 5.56507C61.4388 5.57015 56.7466 8.13972 54.0298 12.385C51.3131 16.6303 50.9474 21.9674 53.0498 26.5485C53.9537 28.4985 55.2638 30.2301 56.8989 31.6215C57.7064 32.2969 58.3513 33.1348 58.7981 34.0843C59.179 34.9222 59.3973 35.8261 59.438 36.7402L59.433 36.74ZM73.5094 44.2454H59.4577C59.5796 45.6469 60.7476 46.7235 62.1542 46.7337H70.8125C72.214 46.7185 73.3826 45.6419 73.5094 44.2454ZM77.638 39.7055H55.33C54.8933 39.7055 54.5429 40.0559 54.5429 40.4927C54.5429 40.9243 54.8933 41.2798 55.33 41.2798H77.6328C78.0695 41.2798 78.425 40.9243 78.425 40.4927C78.425 40.0559 78.0695 39.7055 77.6328 39.7055H77.638ZM69.193 50.918C69.5384 50.5677 69.8177 50.1513 70.0106 49.6993H62.952C63.4497 50.8723 64.4958 51.7204 65.7449 51.9692C66.9942 52.213 68.289 51.8169 69.1879 50.9181L69.193 50.918ZM91.4958 59.3223H101.759C102.155 59.3172 102.531 59.4746 102.81 59.7539C103.089 60.0281 103.247 60.409 103.247 60.8V93.6757C103.247 94.0718 103.089 94.4476 102.81 94.7269C102.531 95.0011 102.155 95.1585 101.759 95.1585H91.4958C90.6783 95.1585 90.0181 94.4933 90.0181 93.6757V92.8937H87.667C86.7884 92.8937 85.9455 92.5433 85.3259 91.9187C85.0009 91.5988 84.747 91.2078 84.5845 90.7812C85.0314 92.1574 84.7826 93.6605 83.9244 94.8234C83.4927 95.3973 82.9392 95.8644 82.2994 96.1895C81.6748 96.5145 80.9994 96.7176 80.2985 96.7938C79.1712 96.9207 78.0286 96.6821 77.0435 96.1184C75.9517 98.2005 73.5649 99.2464 71.3001 98.6321C70.838 98.5102 70.3962 98.3223 69.9849 98.0735C69.5481 98.9113 68.8778 99.602 68.0602 100.074C66.9075 100.745 65.5415 100.922 64.2567 100.577C63.759 100.44 63.2817 100.232 62.845 99.9575C62.4032 100.765 61.743 101.44 60.9458 101.897C58.5489 103.274 55.4919 102.451 54.1056 100.064L47.3161 88.2879H45.9298V89.5778C45.9247 91.4058 44.4419 92.8837 42.6137 92.8938H40.2676V93.6809V93.6758C40.2676 94.0719 40.1102 94.4477 39.836 94.727C39.5567 95.0012 39.1809 95.1586 38.7848 95.1586H28.522C28.131 95.1586 27.7552 95.0012 27.4759 94.727C27.1966 94.4477 27.0392 94.0719 27.0392 93.6758V60.8001C27.0392 60.4091 27.1966 60.0283 27.4759 59.754C27.7552 59.4748 28.131 59.3173 28.522 59.3224H38.7848C39.1809 59.3224 39.5567 59.4748 39.836 59.754C40.1102 60.0283 40.2676 60.4091 40.2676 60.8001V61.5822H42.6137C44.4418 61.5923 45.9247 63.07 45.9298 64.8982V65.7209L50.9774 65.7818L57.8938 62.4963V62.5014C58.2341 62.3389 58.6251 62.3135 58.9856 62.4303L59.5747 62.5826L63.7743 58.3982C64.2212 57.9462 64.7442 57.5756 65.3231 57.3013C65.3536 57.2861 65.3841 57.2709 65.4145 57.2607C65.963 57.0068 66.547 56.8443 67.1512 56.7834L73.2399 56.0978C74.7583 55.915 76.2868 56.372 77.4598 57.3521L84.747 63.3291H84.752C84.9044 63.0498 85.0973 62.7959 85.3259 62.5674C85.9454 61.9428 86.7884 61.5924 87.6669 61.5924H90.013V60.8104C90.013 59.9928 90.6732 59.3276 91.4907 59.3276L91.4958 59.3223ZM90.0131 89.9282V64.5483H87.667C87.5755 64.5534 87.4841 64.5889 87.4232 64.6549C87.3572 64.7209 87.3216 64.8073 87.3216 64.8987V89.5779C87.3216 89.6693 87.3572 89.7556 87.4232 89.8216C87.4892 89.8876 87.5756 89.9232 87.667 89.9283L90.0131 89.9282ZM100.266 62.2876H92.9786V92.1928H100.266V62.2876ZM40.2682 64.5474V89.9273H42.6143C42.7057 89.9273 42.7971 89.8867 42.858 89.8206C42.924 89.7546 42.9596 89.6683 42.9596 89.5769V64.8977C42.9596 64.8063 42.924 64.72 42.858 64.6539C42.7971 64.5879 42.7057 64.5524 42.6143 64.5473L40.2682 64.5474ZM37.3026 62.2825H30.0155V92.1929H37.3026V62.2825ZM45.9303 73.2513V85.322H48.1749V85.3322C48.6979 85.3322 49.1855 85.6115 49.4495 86.0685L56.6808 98.5911C57.0972 99.3072 57.9046 99.7033 58.7272 99.5915C59.5499 99.4798 60.2252 98.8857 60.4385 98.0833C60.5655 97.5958 60.5147 97.0727 60.2913 96.6208L56.437 89.9481L59.0016 88.4603L63.7394 96.6716C63.775 96.7224 63.8054 96.7783 63.8308 96.8341C64.4046 97.7279 65.5624 98.0427 66.507 97.5603C66.5629 97.5247 66.6187 97.4993 66.6746 97.4689H66.6797C67.1011 97.1896 67.4058 96.763 67.5328 96.2704C67.6699 95.7626 67.614 95.2294 67.3703 94.7622C67.355 94.7469 67.3449 94.7266 67.3347 94.7063L62.1297 85.6876C61.7285 84.9817 61.9722 84.0778 62.673 83.6715C63.3789 83.2653 64.2828 83.4989 64.6941 84.1997L69.9043 93.2336C69.9195 93.2641 69.9297 93.2844 69.9449 93.3098L70.8183 94.8231C71.0926 95.2903 71.5445 95.6305 72.0726 95.7676C72.8597 95.9758 73.6976 95.6965 74.2054 95.0618C74.7132 94.4219 74.7945 93.5434 74.4136 92.8223C74.4035 92.8019 74.3933 92.7867 74.3781 92.7664L68.5331 82.6406C68.1218 81.9347 68.3656 81.0257 69.0714 80.6144C69.7823 80.2031 70.6863 80.4468 71.0976 81.1527L76.9425 91.2785L76.9832 91.3648L77.8058 92.7969C77.821 92.8223 77.8414 92.8528 77.8566 92.8731C78.3136 93.5942 79.1515 93.97 79.9944 93.8379C80.3144 93.8075 80.6292 93.711 80.9187 93.5688C81.1624 93.4418 81.3757 93.2641 81.5433 93.0458C81.8988 92.5684 81.9444 91.8118 81.3909 90.7809L70.2749 70.1031L62.2463 75.5266C60.6264 76.8621 58.4479 77.3141 56.4318 76.725C55.5889 76.4152 54.8526 75.8617 54.3193 75.1406C52.6334 72.8402 52.7705 69.6816 54.6443 67.5284L55.0303 67.1526L51.9428 68.6151H51.9377C51.7346 68.7167 51.5111 68.7624 51.2826 68.7522L45.9303 68.6862L45.9303 73.2513Z\"\n      [attr.fill]=\"color()\"\n    />"
  },
  {
    "selector": "app-icon-shake-hands-small",
    "className": "IconShakeHandsSmallComponent",
    "path": "shared/icons/icon-shake-hands-small/icon-shake-hands-small.component.ts",
    "inputs": [],
    "snippet": "<svg width=\"16\" height=\"17\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g clip-path=\"url(#clip0_8576_5843)\">\n    <mask id=\"path-1-inside-1_8576_5843\" fill=\"white\">\n      <path d=\"M16.0002 5.89242C16.0002 3.47332 14.0393 1.51224 11.6202 1.51224C10.2267 1.51224 8.98722 2.16444 8.18544 3.17862L8.16162 3.18917C7.41881 2.44939 6.57867 2.01582 5.81061 1.76028C5.81412 1.7582 5.81716 1.75516 5.82067 1.75308C5.37479 1.59902 4.89791 1.51208 4.39929 1.51208C1.98003 1.51224 0.0187988 3.47316 0.0187988 5.89242C0.0187988 6.33862 0.0867196 6.76884 0.210575 7.1746C0.211374 7.17348 0.212653 7.17236 0.213931 7.17125C0.561366 8.41779 1.27525 9.20024 1.49819 9.39282L2.44477 10.2977L2.50118 10.3523L2.44237 10.4126C2.1579 10.7034 2.16414 11.1699 2.45516 11.4538C2.74602 11.7378 3.21204 11.7322 3.49634 11.4415L3.55755 11.3807C3.56442 11.3748 3.57289 11.371 3.58248 11.371C3.60486 11.371 3.6226 11.3886 3.6226 11.4113C3.6226 11.4205 3.61892 11.4284 3.61349 11.4354L3.61429 11.436L3.55579 11.4961C3.27117 11.787 3.2774 12.2535 3.56842 12.537C3.85944 12.8215 4.32546 12.816 4.60977 12.5245L4.6673 12.4679C4.67449 12.4593 4.6852 12.4536 4.69734 12.4536C4.71988 12.4536 4.73762 12.4711 4.73762 12.4937C4.73762 12.5034 4.73378 12.5121 4.72771 12.5189L4.72787 12.5192L4.72691 12.5202C4.72611 12.521 4.72547 12.5223 4.72451 12.5229L4.66906 12.5795C4.38459 12.8702 4.39066 13.3367 4.68168 13.6205C4.97286 13.9047 5.43888 13.8992 5.72303 13.6084L5.78312 13.5465L5.78424 13.5478C5.79111 13.5425 5.79942 13.5387 5.80853 13.5387C5.8309 13.5387 5.8488 13.5564 5.8488 13.579C5.8488 13.5879 5.84528 13.5956 5.84017 13.6023L5.84065 13.6028L5.83745 13.6061C5.83697 13.6068 5.83649 13.6071 5.83602 13.6079L5.782 13.6634C5.49753 13.9542 5.5036 14.4206 5.79462 14.7045C6.08564 14.9887 6.55198 14.9831 6.83597 14.6919L6.90533 14.621L6.88567 14.6464L7.86469 15.5784C8.12838 15.829 8.4731 15.9671 8.83588 15.9671H8.85458C9.23813 15.9618 9.59499 15.8058 9.85932 15.5281C10.1157 15.2581 10.2529 14.8906 10.2408 14.5115C10.2561 14.5121 10.2723 14.5128 10.2916 14.5121C10.6744 14.5077 11.0304 14.3518 11.2948 14.0741C11.5502 13.8054 11.6854 13.4548 11.6786 13.08C11.6956 13.0805 11.7172 13.0812 11.7362 13.0812C12.1192 13.076 12.4761 12.9202 12.7404 12.6425C12.9973 12.3722 13.1345 12.005 13.1222 11.6257C13.1376 11.6264 13.1587 11.6272 13.1727 11.6267C13.5558 11.6217 13.9122 11.4658 14.1762 11.188C14.6617 10.6788 14.6873 9.89767 14.2695 9.3551C15.2893 8.55268 16.0002 7.28887 16.0002 5.89242ZM13.6057 10.6451C13.4925 10.764 13.3278 10.8321 13.1531 10.8321C12.989 10.8321 12.8368 10.7734 12.7253 10.6672L11.6922 9.70253C11.6267 9.65427 11.5462 9.62486 11.4583 9.62486C11.2392 9.62486 11.0613 9.80306 11.0613 10.0225C11.0613 10.1491 11.1219 10.2611 11.2149 10.3338L12.1475 11.2182C12.3962 11.4552 12.4063 11.8503 12.1697 12.0989C12.0566 12.2183 11.8917 12.2866 11.717 12.2866C11.5532 12.2866 11.401 12.2281 11.2893 12.1215L10.2923 11.1639L10.2918 11.1648C10.2208 11.1001 10.1272 11.0592 10.0236 11.0592C9.80451 11.0592 9.62648 11.2374 9.62648 11.4571C9.62648 11.5629 9.66867 11.6587 9.73643 11.7302L9.73531 11.7312L10.7036 12.6519C10.9497 12.8889 10.9588 13.2836 10.7241 13.5312C10.6109 13.6498 10.4462 13.718 10.2713 13.718C10.107 13.718 9.95521 13.6594 9.84382 13.5532L8.85953 12.6242L8.85889 12.625C8.78713 12.5519 8.68709 12.5063 8.5765 12.5063C8.35708 12.5063 8.17936 12.6843 8.17936 12.9041C8.17936 13.0201 8.22986 13.1229 8.30897 13.1957L9.26578 14.1046C9.51429 14.3416 9.52435 14.737 9.28815 14.9857C9.17516 15.1046 9.01007 15.173 8.8354 15.173C8.67111 15.173 8.51945 15.1146 8.40774 15.0079L7.43319 14.0805L7.49152 14.021C7.77599 13.7298 7.76976 13.2632 7.47858 12.9792C7.18772 12.695 6.72186 12.7008 6.43707 12.9915L6.40367 13.0255L6.40271 13.0243C6.39536 13.0326 6.38497 13.0378 6.37267 13.0378C6.35062 13.0378 6.33304 13.0201 6.33304 12.9981C6.33304 12.9853 6.33895 12.9744 6.34806 12.967L6.37794 12.937C6.66241 12.6458 6.65618 12.1793 6.36516 11.8955C6.0743 11.6109 5.60812 11.6169 5.32349 11.9081L5.28865 11.9438L5.28785 11.9431C5.28098 11.9482 5.27267 11.9524 5.2634 11.9524C5.24135 11.9524 5.22345 11.9345 5.22345 11.9123C5.22345 11.9032 5.22681 11.8953 5.23208 11.8886L5.23144 11.888L5.2348 11.8846C5.23528 11.884 5.2356 11.8834 5.23607 11.883L5.265 11.8533C5.54931 11.562 5.5434 11.0958 5.25206 10.8115C4.96104 10.5275 4.49534 10.5332 4.21039 10.8239L4.17251 10.8604C4.16532 10.8701 4.1543 10.8768 4.14119 10.8768C4.11914 10.8768 4.10124 10.8586 4.10124 10.8367C4.10124 10.8241 4.10747 10.8132 4.11658 10.8062L4.15174 10.7699C4.43573 10.4787 4.42998 10.0124 4.13863 9.7281C3.84777 9.44396 3.38192 9.45003 3.09713 9.74089L3.05909 9.77956L2.03421 8.78648C2.02414 8.77769 1.27158 8.11622 0.922385 6.67918C0.925102 6.67822 0.927659 6.67678 0.930376 6.67582C0.873322 6.42332 0.840401 6.1617 0.840401 5.89226C0.840401 3.93039 2.4363 2.33449 4.39849 2.33449C4.69047 2.33449 4.97318 2.3738 5.24502 2.44076C5.24518 2.44044 5.24534 2.43996 5.24534 2.43996C5.94197 2.63142 6.73736 2.98189 7.4415 3.62514L3.81965 7.21152V7.21168C3.67262 7.35008 3.57945 7.54521 3.57945 7.76304C3.57945 8.18255 3.91937 8.52231 4.3384 8.52231C4.35966 8.52231 4.37963 8.51768 4.40073 8.51576C4.40121 8.5172 4.40185 8.518 4.40249 8.51911C4.41879 8.5172 4.43525 8.51336 4.45187 8.5108C4.47185 8.50761 4.49118 8.50457 4.51084 8.5009C5.1135 8.38151 6.25041 7.17141 7.28521 6.52352C7.86884 6.16346 8.21692 6.04951 8.85713 6.04951C9.39059 6.04951 9.87547 6.25168 10.2437 6.58169C10.2878 6.61446 10.3341 6.65441 10.3859 6.70539L12.6003 8.83155L12.5996 8.83347L13.5624 9.75543C13.8117 9.99228 13.8419 10.3968 13.6057 10.6451Z\"/>\n    </mask>\n    <path d=\"M16.0002 5.89242C16.0002 3.47332 14.0393 1.51224 11.6202 1.51224C10.2267 1.51224 8.98722 2.16444 8.18544 3.17862L8.16162 3.18917C7.41881 2.44939 6.57867 2.01582 5.81061 1.76028C5.81412 1.7582 5.81716 1.75516 5.82067 1.75308C5.37479 1.59902 4.89791 1.51208 4.39929 1.51208C1.98003 1.51224 0.0187988 3.47316 0.0187988 5.89242C0.0187988 6.33862 0.0867196 6.76884 0.210575 7.1746C0.211374 7.17348 0.212653 7.17236 0.213931 7.17125C0.561366 8.41779 1.27525 9.20024 1.49819 9.39282L2.44477 10.2977L2.50118 10.3523L2.44237 10.4126C2.1579 10.7034 2.16414 11.1699 2.45516 11.4538C2.74602 11.7378 3.21204 11.7322 3.49634 11.4415L3.55755 11.3807C3.56442 11.3748 3.57289 11.371 3.58248 11.371C3.60486 11.371 3.6226 11.3886 3.6226 11.4113C3.6226 11.4205 3.61892 11.4284 3.61349 11.4354L3.61429 11.436L3.55579 11.4961C3.27117 11.787 3.2774 12.2535 3.56842 12.537C3.85944 12.8215 4.32546 12.816 4.60977 12.5245L4.6673 12.4679C4.67449 12.4593 4.6852 12.4536 4.69734 12.4536C4.71988 12.4536 4.73762 12.4711 4.73762 12.4937C4.73762 12.5034 4.73378 12.5121 4.72771 12.5189L4.72787 12.5192L4.72691 12.5202C4.72611 12.521 4.72547 12.5223 4.72451 12.5229L4.66906 12.5795C4.38459 12.8702 4.39066 13.3367 4.68168 13.6205C4.97286 13.9047 5.43888 13.8992 5.72303 13.6084L5.78312 13.5465L5.78424 13.5478C5.79111 13.5425 5.79942 13.5387 5.80853 13.5387C5.8309 13.5387 5.8488 13.5564 5.8488 13.579C5.8488 13.5879 5.84528 13.5956 5.84017 13.6023L5.84065 13.6028L5.83745 13.6061C5.83697 13.6068 5.83649 13.6071 5.83602 13.6079L5.782 13.6634C5.49753 13.9542 5.5036 14.4206 5.79462 14.7045C6.08564 14.9887 6.55198 14.9831 6.83597 14.6919L6.90533 14.621L6.88567 14.6464L7.86469 15.5784C8.12838 15.829 8.4731 15.9671 8.83588 15.9671H8.85458C9.23813 15.9618 9.59499 15.8058 9.85932 15.5281C10.1157 15.2581 10.2529 14.8906 10.2408 14.5115C10.2561 14.5121 10.2723 14.5128 10.2916 14.5121C10.6744 14.5077 11.0304 14.3518 11.2948 14.0741C11.5502 13.8054 11.6854 13.4548 11.6786 13.08C11.6956 13.0805 11.7172 13.0812 11.7362 13.0812C12.1192 13.076 12.4761 12.9202 12.7404 12.6425C12.9973 12.3722 13.1345 12.005 13.1222 11.6257C13.1376 11.6264 13.1587 11.6272 13.1727 11.6267C13.5558 11.6217 13.9122 11.4658 14.1762 11.188C14.6617 10.6788 14.6873 9.89767 14.2695 9.3551C15.2893 8.55268 16.0002 7.28887 16.0002 5.89242ZM13.6057 10.6451C13.4925 10.764 13.3278 10.8321 13.1531 10.8321C12.989 10.8321 12.8368 10.7734 12.7253 10.6672L11.6922 9.70253C11.6267 9.65427 11.5462 9.62486 11.4583 9.62486C11.2392 9.62486 11.0613 9.80306 11.0613 10.0225C11.0613 10.1491 11.1219 10.2611 11.2149 10.3338L12.1475 11.2182C12.3962 11.4552 12.4063 11.8503 12.1697 12.0989C12.0566 12.2183 11.8917 12.2866 11.717 12.2866C11.5532 12.2866 11.401 12.2281 11.2893 12.1215L10.2923 11.1639L10.2918 11.1648C10.2208 11.1001 10.1272 11.0592 10.0236 11.0592C9.80451 11.0592 9.62648 11.2374 9.62648 11.4571C9.62648 11.5629 9.66867 11.6587 9.73643 11.7302L9.73531 11.7312L10.7036 12.6519C10.9497 12.8889 10.9588 13.2836 10.7241 13.5312C10.6109 13.6498 10.4462 13.718 10.2713 13.718C10.107 13.718 9.95521 13.6594 9.84382 13.5532L8.85953 12.6242L8.85889 12.625C8.78713 12.5519 8.68709 12.5063 8.5765 12.5063C8.35708 12.5063 8.17936 12.6843 8.17936 12.9041C8.17936 13.0201 8.22986 13.1229 8.30897 13.1957L9.26578 14.1046C9.51429 14.3416 9.52435 14.737 9.28815 14.9857C9.17516 15.1046 9.01007 15.173 8.8354 15.173C8.67111 15.173 8.51945 15.1146 8.40774 15.0079L7.43319 14.0805L7.49152 14.021C7.77599 13.7298 7.76976 13.2632 7.47858 12.9792C7.18772 12.695 6.72186 12.7008 6.43707 12.9915L6.40367 13.0255L6.40271 13.0243C6.39536 13.0326 6.38497 13.0378 6.37267 13.0378C6.35062 13.0378 6.33304 13.0201 6.33304 12.9981C6.33304 12.9853 6.33895 12.9744 6.34806 12.967L6.37794 12.937C6.66241 12.6458 6.65618 12.1793 6.36516 11.8955C6.0743 11.6109 5.60812 11.6169 5.32349 11.9081L5.28865 11.9438L5.28785 11.9431C5.28098 11.9482 5.27267 11.9524 5.2634 11.9524C5.24135 11.9524 5.22345 11.9345 5.22345 11.9123C5.22345 11.9032 5.22681 11.8953 5.23208 11.8886L5.23144 11.888L5.2348 11.8846C5.23528 11.884 5.2356 11.8834 5.23607 11.883L5.265 11.8533C5.54931 11.562 5.5434 11.0958 5.25206 10.8115C4.96104 10.5275 4.49534 10.5332 4.21039 10.8239L4.17251 10.8604C4.16532 10.8701 4.1543 10.8768 4.14119 10.8768C4.11914 10.8768 4.10124 10.8586 4.10124 10.8367C4.10124 10.8241 4.10747 10.8132 4.11658 10.8062L4.15174 10.7699C4.43573 10.4787 4.42998 10.0124 4.13863 9.7281C3.84777 9.44396 3.38192 9.45003 3.09713 9.74089L3.05909 9.77956L2.03421 8.78648C2.02414 8.77769 1.27158 8.11622 0.922385 6.67918C0.925102 6.67822 0.927659 6.67678 0.930376 6.67582C0.873322 6.42332 0.840401 6.1617 0.840401 5.89226C0.840401 3.93039 2.4363 2.33449 4.39849 2.33449C4.69047 2.33449 4.97318 2.3738 5.24502 2.44076C5.24518 2.44044 5.24534 2.43996 5.24534 2.43996C5.94197 2.63142 6.73736 2.98189 7.4415 3.62514L3.81965 7.21152V7.21168C3.67262 7.35008 3.57945 7.54521 3.57945 7.76304C3.57945 8.18255 3.91937 8.52231 4.3384 8.52231C4.35966 8.52231 4.37963 8.51768 4.40073 8.51576C4.40121 8.5172 4.40185 8.518 4.40249 8.51911C4.41879 8.5172 4.43525 8.51336 4.45187 8.5108C4.47185 8.50761 4.49118 8.50457 4.51084 8.5009C5.1135 8.38151 6.25041 7.17141 7.28521 6.52352C7.86884 6.16346 8.21692 6.04951 8.85713 6.04951C9.39059 6.04951 9.87547 6.25168 10.2437 6.58169C10.2878 6.61446 10.3341 6.65441 10.3859 6.70539L12.6003 8.83155L12.5996 8.83347L13.5624 9.75543C13.8117 9.99228 13.8419 10.3968 13.6057 10.6451Z\" fill=\"#F3F3F3\" stroke=\"#F3F3F3\" stroke-width=\"0.319627\" mask=\"url(#path-1-inside-1_8576_5843)\"/>"
  },
  {
    "selector": "app-icon-shape-impact",
    "className": "IconShapeImpactComponent",
    "path": "shared/icons/icon-shape-impact/icon-shape-impact.component.ts",
    "inputs": [
      "color"
    ],
    "snippet": "<img src=\"assets/shapeiconimage.png\" \n    alt=\"Shape Icon\" \n    style=\"background: transparent; width: 24px; height: 24px; object-fit: contain;\"\n    />\n    />"
  },
  {
    "selector": "app-icon-share-second",
    "className": "IconShareSecondComponent",
    "path": "shared/icons/icon-share-second/icon-share-second.component.ts",
    "inputs": [
      "color",
      "strokeWidth"
    ],
    "snippet": "<svg viewBox=\"0 0 49 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M18.1353 27.02L31.7953 34.98M31.7753 13.02L18.1353 20.98M42.9553 10C42.9553 13.3137 40.269 16 36.9553 16C33.6416 16 30.9553 13.3137 30.9553 10C30.9553 6.68629 33.6416 4 36.9553 4C40.269 4 42.9553 6.68629 42.9553 10ZM18.9553 24C18.9553 27.3137 16.269 30 12.9553 30C9.64161 30 6.95532 27.3137 6.95532 24C6.95532 20.6863 9.64161 18 12.9553 18C16.269 18 18.9553 20.6863 18.9553 24ZM42.9553 38C42.9553 41.3137 40.269 44 36.9553 44C33.6416 44 30.9553 41.3137 30.9553 38C30.9553 34.6863 33.6416 32 36.9553 32C40.269 32 42.9553 34.6863 42.9553 38Z\"\n    stroke=\"#1E1E1E\"\n    stroke-width=\"4\"\n    stroke-linecap=\"round\""
  },
  {
    "selector": "app-icon-sign-up",
    "className": "IconSignUpComponent",
    "path": "shared/icons/icon-sign-up/icon-sign-up.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 17 16\" fill=\"none\">\n  <g clip-path=\"url(#clip0_12845_636)\">\n    <path d=\"M11.4166 14V12.6667C11.4166 11.9594 11.1357 11.2811 10.6356 10.781C10.1355 10.281 9.4572 10 8.74996 10H4.08329C3.37605 10 2.69777 10.281 2.19767 10.781C1.69758 11.2811 1.41663 11.9594 1.41663 12.6667V14M14.0833 5.33333V9.33333M16.0833 7.33333H12.0833M9.08329 4.66667C9.08329 6.13943 7.88939 7.33333 6.41663 7.33333C4.94387 7.33333 3.74996 6.13943 3.74996 4.66667C3.74996 3.19391 4.94387 2 6.41663 2C7.88939 2 9.08329 3.19391 9.08329 4.66667Z\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </g>\n  <defs>\n    <clipPath id=\"clip0_12845_636\">"
  },
  {
    "selector": "app-icon-spinner",
    "className": "IconSpinnerComponent",
    "path": "shared/icons/icon-spinner/icon-spinner.component.ts",
    "inputs": [
      "sizeInput",
      "color",
      "strokeWidth"
    ],
    "snippet": "<svg\n  class=\"rotating\"\n  [ngStyle]=\"{\n    width: size(),\n    height: size()\n  }\""
  },
  {
    "selector": "app-icon-square",
    "className": "IconSquareComponent",
    "path": "shared/icons/icon-square/icon-square.component.ts",
    "inputs": [],
    "snippet": "<svg  viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g clip-path=\"url(#clip0_15554_4433)\">\n    <mask id=\"mask0_15554_4433\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\">\n      <rect width=\"100%\" height=\"100%\" [attr.fill]=\"fill()\"/>\n    </mask>\n    <g mask=\"url(#mask0_15554_4433)\">"
  },
  {
    "selector": "app-icon-stop",
    "className": "IconStopComponent",
    "path": "shared/icons/icon-stop/icon-stop.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\">\n  <path d=\"M10 4H6V20H10V4Z\" [attr.stroke]=\"color()\"\n        [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <path d=\"M18 4H14V20H18V4Z\" [attr.stroke]=\"color()\"\n        [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-icon-submit",
    "className": "IconSubmitComponent",
    "path": "shared/icons/icon-submit/icon-submit.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 17 17\" fill=\"none\">\n  <g clip-path=\"url(#clip0_10720_2837)\">\n    <path d=\"M9.24856 16.3294C9.07661 16.3462 8.90304 16.3269 8.73901 16.2726C8.57498 16.2183 8.42412 16.1303 8.29614 16.0143C8.16815 15.8982 8.06587 15.7566 7.99587 15.5987C7.92588 15.4407 7.88971 15.2699 7.8897 15.0971V9.32281L6.02143 11.1911C5.90491 11.3031 5.7491 11.365 5.58747 11.3634C5.42583 11.3618 5.27126 11.2969 5.15695 11.1826C5.04264 11.0683 4.97772 10.9138 4.97613 10.7521C4.97454 10.5905 5.03641 10.4347 5.14844 10.3182L8.07056 7.39604C8.12787 7.3387 8.19591 7.29321 8.2708 7.26218C8.3457 7.23115 8.42597 7.21518 8.50704 7.21518C8.5881 7.21518 8.66838 7.23115 8.74327 7.26218C8.81816 7.29321 8.88621 7.3387 8.94351 7.39604L11.8656 10.3181C11.9775 10.4347 12.0393 10.5904 12.0377 10.752C12.0361 10.9136 11.9712 11.0681 11.8569 11.1824C11.7427 11.2967 11.5882 11.3616 11.4266 11.3632C11.265 11.3648 11.1092 11.303 10.9927 11.1911L9.12438 9.32281V15.0971C14.4349 14.6278 16.6072 7.8523 12.6223 4.34503C9.06157 1.03254 2.94295 3.30741 2.38126 8.13455C2.23403 9.25443 2.39555 10.3933 2.84839 11.428C3.30123 12.4628 4.02817 13.3542 4.9507 14.0059C5.08412 14.1005 5.17457 14.2441 5.20222 14.4053C5.22986 14.5665 5.19244 14.7321 5.09817 14.8657C5.00389 14.9993 4.86046 15.0901 4.69933 15.1181C4.53821 15.1461 4.37255 15.1091 4.23871 15.0151C3.1327 14.2341 2.26106 13.1659 1.71792 11.9256C1.17478 10.6854 0.980783 9.32037 1.15687 7.97793C1.87043 2.15165 9.11367 -0.531669 13.4451 3.42432C18.2273 7.63286 15.6172 15.7594 9.24856 16.3294Z\" [attr.fill]=\"fill()\" [attr.stroke]=\"color()\"\n          [attr.stroke-width]=\"strokeWidth()\"/>\n  </g>\n  <defs>"
  },
  {
    "selector": "app-icon-user-plus",
    "className": "IconUserPlusComponent",
    "path": "shared/icons/icon-user-plus/icon-user-plus.component.ts",
    "inputs": [
      "color",
      "strokeWidth"
    ],
    "snippet": "<svg viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M32 42V38C32 35.8783 31.1571 33.8434 29.6569 32.3431C28.1566 30.8429 26.1217 30 24 30H10C7.87827 30 5.84344 30.8429 4.34315 32.3431C2.84285 33.8434 2 35.8783 2 38V42M40 16V28M46 22H34M25 14C25 18.4183 21.4183 22 17 22C12.5817 22 9 18.4183 9 14C9 9.58172 12.5817 6 17 6C21.4183 6 25 9.58172 25 14Z\"\n    [attr.stroke]=\"color()\"\n    [attr.stroke-width]=\"strokeWidth()\"\n    stroke-linecap=\"round\""
  },
  {
    "selector": "app-icon-vector",
    "className": "IconVectorComponent",
    "path": "shared/icons/icon-vector/icon-vector.component.ts",
    "inputs": [
      "color",
      "rotateDeg"
    ],
    "snippet": "<svg\n  width=\"15\"\n  height=\"31\"\n  viewBox=\"0 0 15 31\"\n  fill=\"none\"\n  [ngStyle]=\"{transform: transform()}\""
  },
  {
    "selector": "app-icon-vertical",
    "className": "IconVerticalComponent",
    "path": "shared/icons/icon-vertical/icon-vertical.component.ts",
    "inputs": [],
    "snippet": "<svg  viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g clip-path=\"url(#clip0_15554_4422)\">\n    <mask id=\"mask0_15554_4422\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\">\n      <rect width=\"100%\" height=\"100%\" [attr.fill]=\"fill()\"/>\n    </mask>\n    <g mask=\"url(#mask0_15554_4422)\">"
  },
  {
    "selector": "app-icon-video-call",
    "className": "IconVideoCallComponent",
    "path": "shared/icons/icon-video-call/icon-video-call.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"none\">\n  <path d=\"M12.9997 1.18311C14.003 1.18311 14.817 1.99675 14.8171 2.99951V8.3335C14.8171 9.33638 14.0031 10.1499 12.9997 10.1499H2.33368C1.33025 10.1499 0.516296 9.33636 0.516296 8.3335V2.99951C0.516418 1.99673 1.33033 1.18311 2.33368 1.18311H12.9997ZM2.33368 2.1499C1.86416 2.1499 1.48321 2.53052 1.48309 2.99951V8.3335C1.48309 8.80259 1.86409 9.18311 2.33368 9.18311H12.9997C13.4693 9.18311 13.8503 8.80259 13.8503 8.3335V2.99951C13.8502 2.53052 13.4692 2.1499 12.9997 2.1499H2.33368Z\" [attr.fill]=\"fill()\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\"/>\n  <path d=\"M8.40887 6.51624C9.16621 6.51624 9.84423 6.98588 10.11 7.69495L10.9548 9.9469L11.0309 10.15H4.30243L4.3786 9.9469L5.22333 7.69495C5.48913 6.98585 6.16716 6.51624 6.9245 6.51624H8.40887ZM6.9245 7.48303C6.57008 7.48303 6.2529 7.70292 6.1286 8.03479L5.69794 9.18323H9.63544L9.20477 8.03479C9.08047 7.70294 8.76328 7.48303 8.40887 7.48303H6.9245Z\" [attr.fill]=\"fill()\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\"/>\n  <path d=\"M9.66675 11.1831C10.4858 11.1831 11.1501 11.8475 11.1501 12.6665C11.1501 13.4856 10.4858 14.1499 9.66675 14.1499C8.84772 14.1498 8.18335 13.4855 8.18335 12.6665C8.18341 11.8475 8.84776 11.1832 9.66675 11.1831ZM9.66675 12.1499C9.38155 12.15 9.15021 12.3813 9.15015 12.6665C9.15015 12.9518 9.38151 13.183 9.66675 13.1831C9.95203 13.1831 10.1833 12.9518 10.1833 12.6665C10.1833 12.3813 9.952 12.1499 9.66675 12.1499Z\" [attr.fill]=\"fill()\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\"/>\n  <path d=\"M14.1502 12.1831V13.1499H12.1834V12.1831H14.1502Z\" [attr.fill]=\"fill()\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\"/>\n  <path d=\"M7.15012 12.1831V13.1499H1.18332V12.1831H7.15012Z\" [attr.fill]=\"fill()\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\"/>"
  },
  {
    "selector": "app-icon-visible",
    "className": "IconVisibleComponent",
    "path": "shared/icons/icon-visible/icon-visible.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 43 42\" fill=\"none\">\n  <g clip-path=\"url(#clip0_10153_8311)\">\n    <path d=\"M2.47314 21.1401C2.47314 21.1401 9.38509 7.31616 21.481 7.31616C33.5769 7.31616 40.4888 21.1401 40.4888 21.1401C40.4888 21.1401 33.5769 34.9639 21.481 34.9639C9.38509 34.9639 2.47314 21.1401 2.47314 21.1401Z\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <path d=\"M21.4811 26.3237C24.3441 26.3237 26.665 24.0028 26.665 21.1398C26.665 18.2767 24.3441 15.9558 21.4811 15.9558C18.6181 15.9558 16.2971 18.2767 16.2971 21.1398C16.2971 24.0028 18.6181 26.3237 21.4811 26.3237Z\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </g>\n  <defs>"
  },
  {
    "selector": "app-icon-wifi",
    "className": "IconWifiComponent",
    "path": "shared/icons/icon-wifi/icon-wifi.component.ts",
    "inputs": [
      "color",
      "strokeWidth"
    ],
    "snippet": "<svg viewBox=\"0 0 33 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g clip-path=\"url(#clip0_4039_13003)\">\n    <path\n      d=\"M6.73427 16.7335C9.36969 14.5384 12.6911 13.3364 16.1209 13.3364C19.5508 13.3364 22.8722 14.5384 25.5076 16.7335M1.96094 12.0002C5.8575 8.5655 10.8733 6.67041 16.0676 6.67041C21.2619 6.67041 26.2777 8.5655 30.1743 12.0002M11.4409 21.4802C12.7945 20.5185 14.4138 20.0019 16.0743 20.0019C17.7347 20.0019 19.354 20.5185 20.7076 21.4802M16.0676 26.6669H16.0809\"\n      [attr.stroke]=\"color()\"\n      [attr.stroke-width]=\"strokeWidth()\""
  },
  {
    "selector": "app-icon-wifi-off",
    "className": "IconWifiOffComponent",
    "path": "shared/icons/icon-wifi-off/icon-wifi-off.component.ts",
    "inputs": [
      "color",
      "strokeWidth"
    ],
    "snippet": "<svg viewBox=\"0 0 33 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g clip-path=\"url(#clip0_4039_11713)\">\n    <path d=\"M2.28857 1.3335L31.6219 30.6668M23.2486 14.7468C24.3407 15.2798 25.362 15.9472 26.2886 16.7335M7.62191 16.7335C9.59802 15.0813 11.9764 13.9818 14.5152 13.5468M15.2352 6.7335C18.0918 6.50332 20.9654 6.85105 23.6846 7.75592C26.4038 8.6608 28.9129 10.1043 31.0619 12.0002M2.84857 12.0002C4.69813 10.3653 6.81884 9.0658 9.11524 8.16016M12.3286 21.4802C13.6822 20.5185 15.3015 20.0018 16.9619 20.0018C18.6223 20.0018 20.2416 20.5185 21.5952 21.4802M16.9552 26.6668H16.9686\"\n          [attr.stroke]=\"color()\"\n          [attr.stroke-width]=\"strokeWidth()\"\n          stroke-linecap=\"round\""
  },
  {
    "selector": "app-iframe-presentation",
    "className": "IframePresentationComponent",
    "path": "shared/components/iframe/iframe-presentation/iframe-presentation.component.ts",
    "inputs": [],
    "snippet": "<div class=\"iframe\" [ngClass]=\"{ 'iframe--center': !loaded }\">\n  <app-load-iframe-btn (clicked)=\"load()\" *ngIf=\"!loaded\"></app-load-iframe-btn>\n\n  <div class=\"iframe__container\" [innerHTML]=\"iframeSrc\" *ngIf=\"loaded\"></div>\n</div>"
  },
  {
    "selector": "app-iframe-preview-dialog",
    "className": "IframePreviewDialogComponent",
    "path": "pages/upload/iframe-preview-dialog/iframe-preview-dialog.component.ts",
    "inputs": [],
    "snippet": "<button [mat-dialog-close]=\"true\">Ok</button>"
  },
  {
    "selector": "app-iframely-embed",
    "className": "IframelyEmbedComponent",
    "path": "ice-breaker/modules/ice-breakers-list-old/ice-breaker-card-module/components/iframely-embed/iframely-embed.component.ts",
    "inputs": [],
    "snippet": ""
  },
  {
    "selector": "app-image-icon",
    "className": "ImageIconComponent",
    "path": "shared/icons/image-icon/image-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  width=\"24\"\n  height=\"25\"\n  viewBox=\"0 0 24 25\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\""
  },
  {
    "selector": "app-image-uploader",
    "className": "ImageUploaderComponent",
    "path": "shared/complex-ui-components/image-uploader/image-uploader.component.ts",
    "inputs": [],
    "snippet": "<div class=\"image-uploader\" role=\"button\" (click)=\"openUploader()\">\n  <img\n    class=\"profile-img\"\n    [src]=\"image() ? (image()?.value ? image()?.value : image()) : defaultBg\"\n    #avatar\n    alt=\"Avatar\""
  },
  {
    "selector": "app-imprint",
    "className": "ImprintComponent",
    "path": "pages/imprint/imprint.component.ts",
    "inputs": [],
    "snippet": "<div class=\"container imprint\">\n  <div [innerHTML]=\"htmlLangBasedLoadService.htmlContent\"></div>\n</div>"
  },
  {
    "selector": "app-info-pane",
    "className": "InfoPaneComponent",
    "path": "pages/rateflow/flexfeedback/info-pane/info-pane.component.ts",
    "inputs": [],
    "snippet": "<div class=\"info-pane\">\n  <h3 class=\"info-pane__title\">\n    How to provide meaningful feedback to each other?\n  </h3>\n\n  <p class=\"info-pane__text\">"
  },
  {
    "selector": "app-inform-modal",
    "className": "InformModalComponent",
    "path": "ice-breaker/modules/ice-breakers-list-old/ice-breaker-card-module/components/ice-breaker-card/inform-modal/inform-modal.component.ts",
    "inputs": [],
    "snippet": "<section>\n  <section class=\"header\">\n    <h2>{{ headerText }}</h2>\n    <button class=\"close-btn\" (click)=\"close()\">\n      <img\n        src=\"../../../../../../../assets/close-modal-icon.svg\""
  },
  {
    "selector": "app-input",
    "className": "InputComponent",
    "path": "shared/UIkit/input/input.component.ts",
    "inputs": [
      "control",
      "inputName",
      "label",
      "placeholder",
      "type",
      "hasAttachmentInput",
      "disabled"
    ],
    "snippet": "@if (control()) {\n  <div class=\"form-field\" [class.with-attachment]=\"hasAttachment()\">\n    <label\n      class=\"form-label\"\n      [for]=\"inputName()\"\n      [ngClass]=\"{ disabled: disabled() }\""
  },
  {
    "selector": "app-input-switch-checkbox",
    "className": "InputSwitchCheckboxComponent",
    "path": "shared/UIkit/inputs/input-switch-checkbox/input-switch-checkbox.component.ts",
    "inputs": [
      "disableClickListener"
    ],
    "snippet": "<input type=\"checkbox\" class=\"hidden\" [checked]=\"value()\" [disabled]=\"disabled()\"/>\n<div class=\"input-switch-checkbox_slider\"></div>"
  },
  {
    "selector": "app-input-switch-checkbox-labeled",
    "className": "InputSwitchCheckboxLabeledComponent",
    "path": "shared/complex-ui-components/labeled-inputs/input-switch-checkbox-labeled/input-switch-checkbox-labeled.component.ts",
    "inputs": [
      "label",
      "description"
    ],
    "snippet": "@if (label()) {\n  <label class=\"input-switch-checkbox_label-container\"\n         (click)=\"labelClickHandler()\"\n  >\n    <span class=\"input-switch-checkbox_label\">{{ label() }}</span>\n    <ng-container *ngTemplateOutlet=\"switchInput\"></ng-container>"
  },
  {
    "selector": "app-input-text",
    "className": "InputTextComponent",
    "path": "shared/UIkit/inputs/input-text/input-text.component.ts",
    "inputs": [
      "placeholder",
      "invalid"
    ],
    "snippet": "<input\n  class=\"text-input\"\n  type=\"text\"\n  [(ngModel)]=\"value\"\n  [placeholder]=\"placeholder()\"\n  [disabled]=\"disabled()\""
  },
  {
    "selector": "app-input-textarea",
    "className": "InputTextareaComponent",
    "path": "shared/UIkit/inputs/input-textarea/input-textarea.component.ts",
    "inputs": [
      "placeholder",
      "invalid"
    ],
    "snippet": "<textarea\n  class=\"text-area-input\"\n  [placeholder]=\"placeholder()\"\n  [disabled]=\"disabled()\"\n  (input)=\"changeHandler()\"\n  #textAreaInput"
  },
  {
    "selector": "app-insights",
    "className": "InsightsComponent",
    "path": "pages/insights/insights.component.ts",
    "inputs": [],
    "snippet": "<div class=\"insights\">\n  <div class=\"navigation-wrap\">\n    <svg routerLink=\"/insights\">\n      <use xlink:href=\"assets/feather-icon-defs.svg#icon-arrow-left\"></use>\n    </svg>\n"
  },
  {
    "selector": "app-insights-newsfeed",
    "className": "InsightsNewsfeedComponent",
    "path": "pages/insights/insights-newsfeed/insights-newsfeed.component.ts",
    "inputs": [],
    "snippet": "<div class=\"newsfeed\">\n\n  <app-main-content-menu\n    [menuItems]=\"menuItems\"\n    (changeSelectedItem)=\"didSelectMenuItem($event)\"\n  ></app-main-content-menu>"
  },
  {
    "selector": "app-inspiring-feedbacks",
    "className": "InspiringFeedbacksComponent",
    "path": "pages/profile/rudimentary/inspiring-feedbacks/layout/inspiring-feedbacks.component.ts",
    "inputs": [],
    "snippet": "<div\n  class=\"profile-feedbacks\"\n  *ngIf=\"usersFeedbacks$ | async as usersFeedbacks; else loaderTpl\"\n>\n  <app-newsfeed-item\n    *ngFor=\"let feedback of usersFeedbacks\""
  },
  {
    "selector": "app-inspiringrate-modal",
    "className": "InspiringrateModalComponent",
    "path": "pages/rateflow/flexfeedback/inspiringrate-modal/inspiringrate-modal.component.ts",
    "inputs": [],
    "snippet": "<div class=\"modal__container\">\n  <button mat-icon-button mat-dialog-close class=\"modal__btn--close\">\n    <img src=\"assets/close-modal-icon.svg\" alt=\"close-modal-icon\" />\n  </button>\n\n  <div class=\"modal__body\">"
  },
  {
    "selector": "app-instagram-icon",
    "className": "InstagramIconComponent",
    "path": "shared/icons/instagram-icon/instagram-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\">\n  <g clip-path=\"url(#clip0_6165_3901)\">\n    <path d=\"M11.9999 2.58439C15.2039 2.58439 15.5839 2.59639 16.8499 2.65439C20.1019 2.80239 21.6209 4.34539 21.7689 7.57339C21.8269 8.83839 21.8379 9.21839 21.8379 12.4224C21.8379 15.6274 21.8259 16.0064 21.7689 17.2714C21.6199 20.4964 20.1049 22.0424 16.8499 22.1904C15.5839 22.2484 15.2059 22.2604 11.9999 22.2604C8.79588 22.2604 8.41588 22.2484 7.15088 22.1904C3.89088 22.0414 2.37988 20.4914 2.23188 17.2704C2.17388 16.0054 2.16188 15.6264 2.16188 12.4214C2.16188 9.21739 2.17488 8.83839 2.23188 7.57239C2.38088 4.34539 3.89588 2.80139 7.15088 2.65339C8.41688 2.59639 8.79588 2.58439 11.9999 2.58439ZM11.9999 0.421387C8.74088 0.421387 8.33288 0.435387 7.05288 0.493387C2.69488 0.693387 0.272878 3.11139 0.0728779 7.47339C0.0138779 8.75439 -0.00012207 9.16239 -0.00012207 12.4214C-0.00012207 15.6804 0.0138779 16.0894 0.0718779 17.3694C0.271878 21.7274 2.68988 24.1494 7.05188 24.3494C8.33288 24.4074 8.74088 24.4214 11.9999 24.4214C15.2589 24.4214 15.6679 24.4074 16.9479 24.3494C21.3019 24.1494 23.7299 21.7314 23.9269 17.3694C23.9859 16.0894 23.9999 15.6804 23.9999 12.4214C23.9999 9.16239 23.9859 8.75439 23.9279 7.47439C23.7319 3.12039 21.3109 0.694387 16.9489 0.494387C15.6679 0.435387 15.2589 0.421387 11.9999 0.421387ZM11.9999 6.25939C8.59688 6.25939 5.83788 9.01839 5.83788 12.4214C5.83788 15.8244 8.59688 18.5844 11.9999 18.5844C15.4029 18.5844 18.1619 15.8254 18.1619 12.4214C18.1619 9.01839 15.4029 6.25939 11.9999 6.25939ZM11.9999 16.4214C9.79088 16.4214 7.99988 14.6314 7.99988 12.4214C7.99988 10.2124 9.79088 8.42139 11.9999 8.42139C14.2089 8.42139 15.9999 10.2124 15.9999 12.4214C15.9999 14.6314 14.2089 16.4214 11.9999 16.4214ZM18.4059 4.57639C17.6099 4.57639 16.9649 5.22139 16.9649 6.01639C16.9649 6.81139 17.6099 7.45639 18.4059 7.45639C19.2009 7.45639 19.8449 6.81139 19.8449 6.01639C19.8449 5.22139 19.2009 4.57639 18.4059 4.57639Z\" fill=\"#1E1E1E\"/>\n  </g>\n  <defs>\n    <clipPath id=\"clip0_6165_3901\">"
  },
  {
    "selector": "app-internal-chat-header",
    "className": "InternalChatHeaderComponent",
    "path": "pages/conversation/components/internal-chat-header/internal-chat-header.component.ts",
    "inputs": [
      "conversation"
    ],
    "snippet": "<div class=\"users-block\">\n  <div class=\"users\">\n    @for (user of conversation().members; let last = $last; track user.user_id) {\n      <img class=\"user\" [ngClass]=\"{shifted: !last}\" [ngSrc]=\"user.avatar || getDefaultAvatar(user.id)\" [alt]=\"'Chat member ' + user.username\"\n           [width]=\"50\" [height]=\"50\">\n    }"
  },
  {
    "selector": "app-intro-card",
    "className": "IntroCardComponent",
    "path": "pages/my-projects/intro-card/intro-card.component.ts",
    "inputs": [],
    "snippet": "<div class=\"intro-card\" id=\"intro-card\"></div>"
  },
  {
    "selector": "app-invitation-confirmation",
    "className": "InvitationConfirmationComponent",
    "path": "pages/organization-invitation/components/invitation-confirmation/invitation-confirmation.component.ts",
    "inputs": [
      "token"
    ],
    "snippet": "@if (!isSignedInUser()) {\n  <app-auth\n    [authMode]=\"invitedUserExists() ? AUTH_MODES.LOGIN : AUTH_MODES.SIGNUP\"\n    [restrictSwitchMode]=\"true\"\n    [predefinedEmail]=\"invitationEmail()\"\n    [predefinedOrganization]=\"invitedIntoOrganization()\""
  },
  {
    "selector": "app-invite-popup",
    "className": "InvitePopupComponent",
    "path": "pages/usersettings/components/invite-popup/invite-popup.component.ts",
    "inputs": [],
    "snippet": "<div  class=\"invite-user\">\n  <form [formGroup]=\"addUserForm\">\n    <div class=\"invite-user__header\">\n      <h3 class=\"invite-user__title\">{{ 'inviteUser.title' | translate }} {{ organization() }}</h3>\n      <app-close-icon color=\"#1E1E1E\" class=\"invite-user__close\" (click)=\"close()\"></app-close-icon>\n    </div>"
  },
  {
    "selector": "app-is-online",
    "className": "IsOnlineComponent",
    "path": "shared/complex-ui-components/is-online/is-online.component.ts",
    "inputs": [
      "isOnline"
    ],
    "snippet": "@if (isOnline()?.online) {\n  {{ 'is-online.online' | translate }}\n  <app-icon-wifi\n    class=\"is-online_icon\"\n  ></app-icon-wifi>\n} @else {"
  },
  {
    "selector": "app-item-ctb-media-view",
    "className": "ItemCtbMediaViewComponent",
    "path": "pages/newsfeed/newsfeed-item/item-ctb-media-view/item-ctb-media-view.component.ts",
    "inputs": [],
    "snippet": "<div class=\"item-media-view-container\" #contentContainer>\n  <p class=\"item-media-view-container__title\">{{ title }}</p>\n  <div\n    class=\"item-media-view\"\n    [ngClass]=\"{\n      active: selectedFile?.id === file.id || (isWinnerFile(file) && readonly),"
  },
  {
    "selector": "app-item-media-view",
    "className": "ItemMediaViewComponent",
    "path": "shared/components/item-media-view/item-media-view.component.ts",
    "inputs": [],
    "snippet": "<div *ngIf=\"!file\" class=\"loader-icon\">\n  <app-small-spinner diameter=\"20\"></app-small-spinner>\n</div>\n\n<div\n  *ngIf=\"file\""
  },
  {
    "selector": "app-item-resort-view",
    "className": "ItemResortViewComponent",
    "path": "pages/newsfeed/newsfeed-item/item-resort-view/item-resort-view.component.ts",
    "inputs": [],
    "snippet": "<div class=\"resort\">\n  <div class=\"resort__header\">\n    <app-gt-switch (didChangeEvent)=\"didToggleResort()\">\n      <p class=\"gt-switch-left\" (click)=\"didSelectResort()\">\n        {{ 'item_resort_view.resort' | translate }}\n      </p>"
  },
  {
    "selector": "app-judgement-counseling-icon",
    "className": "JudgementCounselingIconComponent",
    "path": "shared/icons/jugendamt-counseling-icon/judgement-counseling-icon.component.ts",
    "inputs": [
      "strokeWidth",
      "strokeColor",
      "color"
    ],
    "snippet": ""
  },
  {
    "selector": "app-landing-form",
    "className": "LandingFormComponent",
    "path": "pages/usersettings/components/landing-form/landing-form.component.ts",
    "inputs": [],
    "snippet": "@if (form) {\n  <form [formGroup]=\"form\" class=\"form\">\n    <div class=\"form__group-row\">\n      <div class=\"landing-form-bordered-section\">\n        <div class=\"form-field w-100 m-12 form-field--right form-field--activate-public-org\">\n          <div class=\"form-field__right-inner\">"
  },
  {
    "selector": "app-landing-page-icon",
    "className": "LandingPageIconComponent",
    "path": "shared/icons/landing-page-icon/landing-page-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  viewBox=\"0 0 90 91\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n>\n  <path"
  },
  {
    "selector": "app-language-icon",
    "className": "LanguageIconComponent",
    "path": "shared/icons/language-icon/language-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  width=\"85\"\n  height=\"85\"\n  viewBox=\"0 0 85 85\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\""
  },
  {
    "selector": "app-languages",
    "className": "LanguagesComponent",
    "path": "pages/usersettings/components/languages/languages.component.ts",
    "inputs": [],
    "snippet": "<div class=\"language_container\">\n  <app-section-header\n    [title]=\"'languages.title' | translate\"\n    [subtitle]=\"'languages.choose' | translate\"\n  >\n    <app-language-icon></app-language-icon>"
  },
  {
    "selector": "app-last-message",
    "className": "LastMessageComponent",
    "path": "pages/conversations/components/last-message/last-message.component.ts",
    "inputs": [
      "message",
      "messageCount",
      "mentions"
    ],
    "snippet": "<div>\n  @if(message()) {\n    <div class=\"last-message\">\n    @if(message().subtitle) {\n      <span class=\"subtitle\"> {{ message().subtitle }} </span>\n    }"
  },
  {
    "selector": "app-like-icon",
    "className": "LikeIconComponent",
    "path": "shared/icons/like-icon/like-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 25 25\" fill=\"none\">\n  <g clip-path=\"url(#clip0_5980_4252)\">\n    <path d=\"M21.8125 4.82081C21.3018 4.30981 20.6953 3.90446 20.0279 3.62789C19.3604 3.35133 18.645 3.20898 17.9225 3.20898C17.2 3.20898 16.4846 3.35133 15.8172 3.62789C15.1497 3.90446 14.5433 4.30981 14.0325 4.82081L12.9725 5.88081L11.9125 4.82081C10.8808 3.78912 9.48156 3.20952 8.02253 3.20952C6.5635 3.20952 5.16422 3.78912 4.13253 4.82081C3.10084 5.8525 2.52124 7.25178 2.52124 8.71081C2.52124 10.1698 3.10084 11.5691 4.13253 12.6008L12.9725 21.4408L21.8125 12.6008C22.3235 12.0901 22.7289 11.4836 23.0054 10.8162C23.282 10.1487 23.4244 9.4333 23.4244 8.71081C23.4244 7.98832 23.282 7.27291 23.0054 6.60545C22.7289 5.938 22.3235 5.33157 21.8125 4.82081Z\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </g>\n  <defs>\n    <clipPath id=\"clip0_5980_4252\">"
  },
  {
    "selector": "app-linkedin-icon",
    "className": "LinkedinIconComponent",
    "path": "shared/icons/linkedin-icon/linkedin-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\">\n  <g clip-path=\"url(#clip0_6165_3903)\">\n    <path d=\"M18.9999 0.421387H4.99988C2.23888 0.421387 -0.00012207 2.66039 -0.00012207 5.42139V19.4214C-0.00012207 22.1824 2.23888 24.4214 4.99988 24.4214H18.9999C21.7619 24.4214 23.9999 22.1824 23.9999 19.4214V5.42139C23.9999 2.66039 21.7619 0.421387 18.9999 0.421387ZM7.99988 19.4214H4.99988V8.42139H7.99988V19.4214ZM6.49988 7.15339C5.53388 7.15339 4.74988 6.36339 4.74988 5.38939C4.74988 4.41539 5.53388 3.62539 6.49988 3.62539C7.46588 3.62539 8.24988 4.41539 8.24988 5.38939C8.24988 6.36339 7.46688 7.15339 6.49988 7.15339ZM19.9999 19.4214H16.9999V13.8174C16.9999 10.4494 12.9999 10.7044 12.9999 13.8174V19.4214H9.99988V8.42139H12.9999V10.1864C14.3959 7.60039 19.9999 7.40939 19.9999 12.6624V19.4214Z\" fill=\"#1E1E1E\"/>\n  </g>\n  <defs>\n    <clipPath id=\"clip0_6165_3903\">"
  },
  {
    "selector": "app-load-iframe-btn",
    "className": "LoadIframeBtnComponent",
    "path": "shared/components/iframe/load-iframe-btn/load-iframe-btn.component.ts",
    "inputs": [],
    "snippet": "<button class=\"load-btn\" (click)=\"clicked.emit()\">\n  <span>{{ 'load_iframe_btn.text' | translate }}</span>\n  <img src=\"assets/projectfiles-types/iframe-big.svg\" />\n</button>"
  },
  {
    "selector": "app-load-pdf-btn",
    "className": "LoadPdfBtnComponent",
    "path": "shared/components/pdf/load-pdf-btn/load-pdf-btn.component.ts",
    "inputs": [],
    "snippet": "<button class=\"load-btn\" (click)=\"clicked.emit()\">\n  <span>{{ 'load_pdf_btn.text' | translate }}</span>\n  <img src=\"assets/projectfiles-types/pdf-big.svg\" />\n</button>"
  },
  {
    "selector": "app-location-icon",
    "className": "LocationIconComponent",
    "path": "shared/icons/location-icon/location-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  width=\"24\"\n  height=\"25\"\n  viewBox=\"0 0 24 25\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\""
  },
  {
    "selector": "app-lock-icon",
    "className": "LockIconComponent",
    "path": "shared/icons/lock-icon/lock-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  width=\"101\"\n  height=\"114\"\n  viewBox=\"0 0 101 114\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\""
  },
  {
    "selector": "app-login-dialog",
    "className": "LoginDialogComponent",
    "path": "shared/complex-ui-components/login-dialog/login-dialog.component.ts",
    "inputs": [],
    "snippet": "<div class=\"login-dialog\" #authRef>\n  <form class=\"form\" [formGroup]=\"form\" (submit)=\"onSubmit()\">\n    @if(form.get('username'); as nameForm) {\n      <app-input [control]=\"form.get('username')\" inputName=\"username\" [placeholder]=\"'validation.unique' | translate\" type=\"text\" [label]=\"'fields.username' | translate\">\n\n        @if(!("
  },
  {
    "selector": "app-login-icon",
    "className": "LoginIconComponent",
    "path": "shared/icons/login-icon/login-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\" fill=\"none\">\n  <path d=\"M15.3638 3.62354H19.3638C19.8942 3.62354 20.4029 3.83425 20.778 4.20932C21.1531 4.58439 21.3638 5.0931 21.3638 5.62354V19.6235C21.3638 20.154 21.1531 20.6627 20.778 21.0377C20.4029 21.4128 19.8942 21.6235 19.3638 21.6235H15.3638M10.3638 17.6235L15.3638 12.6235M15.3638 12.6235L10.3638 7.62354M15.3638 12.6235H3.36377\" [attr.stroke]=\"color()\"\n        [attr.stroke-width]=\"strokeWidth()\"  stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-login-modal",
    "className": "LoginModalComponent",
    "path": "shared/components/auth-modal/login-modal/login-modal.component.ts",
    "inputs": [
      "conversationId"
    ],
    "snippet": "<app-login-icon></app-login-icon>\n<h2 class=\"login-modal-title\">{{ 'auth-header.sign-in' | translate }}</h2>\n<form class=\"form\" [formGroup]=\"form\" (submit)=\"onSubmit()\">\n\n  <app-input [control]=\"form.get('email')\" inputName=\"email\" placeholder=\"example@mail.org\" type=\"email\"\n             [label]=\"'fields.email' | translate\""
  },
  {
    "selector": "app-login-proposal",
    "className": "LoginProposalComponent",
    "path": "shared/components/login-proposal/login-proposal.component.ts",
    "inputs": [
      "title",
      "conversationId"
    ],
    "snippet": "<div class=\"login-proposal\">\n  <div class=\"login-proposal__title\">\n    <app-icon-info color=\"#1E1E1E\" strokeWidth=\"1.6\"></app-icon-info>\n    <span>{{ title() }}</span>\n  </div>\n  <div class=\"login-proposal__actions\">"
  },
  {
    "selector": "app-logo-ice-breaker",
    "className": "LogoIceBreakerComponent",
    "path": "ice-breaker/modules/logo-ice-breaker/logo-ice-breaker.component.ts",
    "inputs": [],
    "snippet": ""
  },
  {
    "selector": "app-lupai-chat-bot",
    "className": "LupaiChatBotComponent",
    "path": "pages/conversation/components/lupai-chat-bot/lupai-chat-bot.component.ts",
    "inputs": [],
    "snippet": "<div class=\"lupai-main\">\n    @if (mobileHeaderVisible() === false) {\n    <app-lupai-header (plusAction)=\"handlePlusAction()\" (menuAction)=\"toggleRightMenu()\" />\n    }\n\n    <div class=\"chat\">"
  },
  {
    "selector": "app-lupai-header",
    "className": "LupaiHeaderComponent",
    "path": "pages/conversation/components/lupai-chat-bot/components/lupai-header/lupai-header.component.ts",
    "inputs": [
      "title",
      "subtitle",
      "robotIconSrc",
      "showNavigationButtons",
      "showActionButtons"
    ],
    "snippet": "<div class=\"lupai-header\">\n    <!-- Top row: Title and navigation -->\n    <div class=\"lupai-header__top\">\n        @if (showNavigationButtons()) {\n        <button class=\"lupai-header__nav-btn\" (click)=\"onNavigateLeftClick($event)\">\n            <mat-icon>keyboard_arrow_left</mat-icon>"
  },
  {
    "selector": "app-lupai-icon",
    "className": "LupaiIconComponent",
    "path": "shared/icons/lupai-icon/lupai-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 25 25\" fill=\"none\">\n  <g clip-path=\"url(#clip0_9660_9693)\">\n    <path d=\"M7.64807 16.25C5.76244 13.7576 6.05758 10.0274 8.31214 7.92859L9.36153 9.15015C7.72185 10.6832 7.50869 13.4051 8.88602 15.2334L7.64807 16.25Z\" [attr.fill]=\"fill()\"/>\n    <path d=\"M23.8562 16.1025C23.3643 14.5448 22.8314 12.5689 22.7905 12.3312C22.3149 6.12501 18.1666 1.44373 12.7392 1.44373C9.86979 1.44373 7.2545 2.53411 5.36887 4.51812C3.21269 6.78088 2.46664 10.1832 2.647 13.9627V24.3992H4.28668V13.7167C4.13091 10.3554 4.713 7.57612 6.55763 5.6495C8.13173 3.99343 10.3289 3.0834 12.7474 3.0834C17.3057 3.0834 20.7573 7.10882 21.1672 12.4542C21.1918 12.7411 21.5689 14.2578 22.2986 16.5698C22.3313 16.6763 22.2822 16.7501 22.2658 16.7665C22.233 16.8157 22.2002 16.8157 22.2002 16.8157H21.5115C20.3637 16.7993 19.6915 18.0865 19.5439 19.2342C19.5439 21.1691 18.3223 22.571 16.158 22.571C14.1248 22.571 12.4687 20.9149 12.4687 18.8817V15.0367C13.4197 14.7005 14.1084 13.7987 14.1084 12.7247C14.1084 11.372 13.0098 10.2652 11.6488 10.2652C10.2879 10.2652 9.18932 11.372 9.18932 12.7247C9.18932 13.7905 9.87798 14.6923 10.829 15.0367V19.0703H10.8372C10.9356 21.9233 13.2803 24.2189 16.1498 24.2189C19.216 24.2189 21.1426 22.1775 21.1754 19.3572C21.2246 18.644 21.4459 18.521 21.4951 18.4636H22.192C22.7413 18.4636 23.2414 18.2094 23.5775 17.7667C23.93 17.2994 24.0366 16.6845 23.8644 16.1025H23.8562ZM11.6324 11.9049C12.0834 11.9049 12.4523 12.2738 12.4523 12.7247C12.4523 13.1756 12.0834 13.5446 11.6324 13.5446C11.1815 13.5446 10.8126 13.1756 10.8126 12.7247C10.8126 12.2738 11.1815 11.9049 11.6324 11.9049Z\" [attr.fill]=\"fill()\"/>\n    <path d=\"M15.9283 16.25L14.6904 15.2334C16.0677 13.4051 15.8545 10.6751 14.2148 9.15015L15.2642 7.92859C17.5106 10.0192 17.8139 13.7576 15.9283 16.25Z\" [attr.fill]=\"fill()\"/>\n  </g>"
  },
  {
    "selector": "app-lupai-message",
    "className": "LupaiMessageComponent",
    "path": "pages/conversation/components/lupai-chat-bot/components/lupai-message/lupai-message.component.ts",
    "inputs": [
      "message"
    ],
    "snippet": "<div [class]=\"getAllClasses()\">\n\n    <!-- User Message -->\n    @if (isUserMessage()) {\n    <div class=\"lupai-message__user\">\n        <div class=\"lupai-message__avatar\">"
  },
  {
    "selector": "app-lupai-mobile-header",
    "className": "LupaiMobileHeaderComponent",
    "path": "pages/conversation/components/lupai-chat-bot/components/lupai-mobile-header/lupai-mobile-header.component.ts",
    "inputs": [
      "robotIconSrc",
      "showNavigationButtons",
      "showActionButtons"
    ],
    "snippet": "<div class=\"lupai-mobile-header\">\n    <div class=\"lupai-mobile-header__container\">\n        <!-- Left side - Bot Controls -->\n        <div class=\"lupai-mobile-header__bot-controls\">\n            <button class=\"lupai-mobile-header__nav-btn\" (click)=\"onNavigateLeftClick()\">\n                <mat-icon>keyboard_arrow_left</mat-icon>"
  },
  {
    "selector": "app-lupai-right-sidebar",
    "className": "LupaiRightSidebarComponent",
    "path": "pages/conversation/components/lupai-chat-bot/components/lupai-right-sidebar/lupai-right-sidebar.component.ts",
    "inputs": [],
    "snippet": "<div class=\"lupai-right-menu\" [ngClass]=\"{'lupai-right-menu--open': isOpen()}\">\n    <div class=\"lupai-right-menu__header\">\n        <h3>{{ 'lupai_chatbot.right_sidebar.title' | translate }}</h3>\n        <button class=\"lupai-right-menu__close\" (click)=\"onCloseMenu()\">\n            <mat-icon>close</mat-icon>\n        </button>"
  },
  {
    "selector": "app-mail-icon",
    "className": "MailIconComponent",
    "path": "shared/icons/mail-icon/mail-icon.component.ts",
    "inputs": [],
    "snippet": "<svg  viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M44 12C44 9.8 42.2 8 40 8H8C5.8 8 4 9.8 4 12M44 12V36C44 38.2 42.2 40 40 40H8C5.8 40 4 38.2 4 36V12M44 12L24 26L4 12\" [attr.stroke]=\"color()\"\n        [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-main-content-menu",
    "className": "MainContentMenuComponent",
    "path": "main-content-menu/components/_main-content-menu/main-content-menu.component.ts",
    "inputs": [
      "menuItems",
      "allowDropdown",
      "visibleItemsAmount",
      "preselectedItem"
    ],
    "snippet": "<app-visible-menu-items-container\n  [visibleItems]=\"visibleItems()\"\n  [selectedItem]=\"selectedItem()\"\n  [displayDropdownBtn]=\"displayDropdownBtn()\"\n  [dropdownIsActive]=\"dropdownIsActive()\"\n  (selectedItemChange)=\"setSelected($event)\""
  },
  {
    "selector": "app-mark-icon",
    "className": "MarkIconComponent",
    "path": "shared/icons/mark-icon/mark-icon.component.ts",
    "inputs": [
      "color",
      "strokeWidth"
    ],
    "snippet": "<svg\n  viewBox=\"0 0 48 48\" fill=\"none\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n>\n  <path d=\"M40 12L18 34L8 24\" [attr.stroke]=\"color()\""
  },
  {
    "selector": "app-maze-animation",
    "className": "MazeAnimationComponent",
    "path": "pages/why/maze-animation/maze-animation.component.ts",
    "inputs": [],
    "snippet": "<div #cardRef class=\"maze-animation\">\n  <div #headerRef class=\"maze-animation__header\"></div>\n  <div class=\"maze-animation__body\" #bodyRef>\n    <img\n      [ngStyle]=\"{ opacity: showMaze ? 1 : 0 }\"\n      #mazeRef"
  },
  {
    "selector": "app-meeting-confirmation",
    "className": "MeetingConfirmationComponent",
    "path": "pages/conversation/meeting-confirmation/meeting-confirmation.component.ts",
    "inputs": [],
    "snippet": "<div class=\"meeting__confirmation\">\n  <div class=\"skill__items\" *ngIf=\"skill\">\n    <div class=\"skill__container\">\n      <div class=\"skill__item\">\n        <img [src]=\"skill.icon\" class=\"skill__icon\" />\n      </div>"
  },
  {
    "selector": "app-meeting-feedback",
    "className": "MeetingFeedbackComponent",
    "path": "pages/conversation/meeting-feedback/meeting-feedback.component.ts",
    "inputs": [],
    "snippet": "<div class=\"meeting-feedback\">\n  <div\n    *ngFor=\"let item of meetingFeedbackOptions\"\n    class=\"meeting-feedback__item\"\n  >\n    <div class=\"meeting-feedback__question\">"
  },
  {
    "selector": "app-member-card",
    "className": "MemberCardComponent",
    "path": "pages/organizations/components/member-card/member-card.component.ts",
    "inputs": [],
    "snippet": "<div class=\"member-card\">\n  <div class=\"member-card__image\" [style.background-image]=\"'url(' + member().image + ')'\"></div>\n  <div class=\"member-card__name\">{{member().username}}</div>\n  <div class=\"member-card__description\">{{member().description}}</div>\n</div>"
  },
  {
    "selector": "app-members-icon",
    "className": "MembersIconComponent",
    "path": "shared/icons/members-icon/members-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 22\" fill=\"none\">\n  <path d=\"M12.9725 1.60474C15.2973 1.60474 17.1819 3.48934 17.1819 5.81412C17.1819 7.24572 16.4672 8.51039 15.3752 9.27086C15.5377 9.33413 15.6973 9.40382 15.8534 9.47946C15.8593 9.48233 15.8651 9.48516 15.8709 9.48799C15.8994 9.5019 15.9279 9.51604 15.9562 9.53039C15.9683 9.53649 15.9804 9.54267 15.9925 9.54889C16.0077 9.55675 16.0229 9.56461 16.038 9.57253C16.0582 9.58301 16.0782 9.59363 16.0982 9.60435C16.1088 9.61016 16.1194 9.61591 16.13 9.62169C16.3572 9.74506 16.577 9.88185 16.7883 10.0313C16.7935 10.0354 16.799 10.0393 16.8044 10.0431C16.8218 10.0551 16.839 10.0674 16.8561 10.0799C16.6792 9.69702 16.5805 9.27045 16.5805 8.82083C16.5805 7.16027 17.9267 5.81412 19.5872 5.81412C21.2478 5.81412 22.5939 7.16027 22.5939 8.82083C22.5939 9.71111 22.207 10.511 21.5921 11.0616C23.248 11.8214 24.398 13.4942 24.398 15.4356V17.5933C24.398 17.8386 24.249 18.0593 24.0216 18.151C22.5483 18.7453 21.069 19.0436 19.5872 19.0436C19.3753 19.0436 19.1634 19.0375 18.9516 19.0253L19.1251 19.0334L18.987 19.0879C18.8355 19.1463 18.6839 19.2026 18.5324 19.2566C18.5133 19.2634 18.4942 19.2701 18.4752 19.2769C18.4158 19.2978 18.3565 19.3184 18.2971 19.3387C18.2832 19.3434 18.2693 19.3481 18.2554 19.3528C18.1968 19.3727 18.1383 19.3922 18.0798 19.4113C18.0499 19.4211 18.0198 19.4309 17.9897 19.4405C17.9417 19.456 17.8938 19.4711 17.8459 19.4861C17.8197 19.4943 17.7936 19.5024 17.7674 19.5104C17.7188 19.5253 17.6702 19.54 17.6215 19.5545C17.5978 19.5616 17.574 19.5686 17.5501 19.5756C17.4909 19.593 17.4317 19.61 17.3726 19.6267C17.3667 19.6284 17.3605 19.6301 17.3544 19.6318C17.2868 19.6508 17.2193 19.6693 17.1517 19.6874C17.1321 19.6926 17.1123 19.6979 17.0926 19.7031C17.0432 19.7161 16.9938 19.7289 16.9445 19.7414C16.9069 19.751 16.8692 19.7605 16.8315 19.7698C16.7917 19.7796 16.752 19.7893 16.7122 19.7988C16.684 19.8056 16.6558 19.8122 16.6276 19.8188C16.5786 19.8303 16.5296 19.8415 16.4805 19.8526C16.4459 19.8603 16.4112 19.868 16.3765 19.8756C16.3373 19.8841 16.2982 19.8925 16.259 19.9007C16.2297 19.9069 16.2003 19.913 16.171 19.919C16.1167 19.9301 16.0625 19.9409 16.0083 19.9515C15.9889 19.9552 15.9695 19.959 15.9502 19.9627C15.8969 19.9728 15.8436 19.9827 15.7903 19.9923C15.7626 19.9973 15.735 20.0022 15.7073 20.007C15.6633 20.0148 15.6193 20.0223 15.5753 20.0296C15.5372 20.0359 15.499 20.0422 15.4608 20.0483C15.4345 20.0524 15.4084 20.0565 15.3822 20.0606C15.3285 20.0688 15.2749 20.0768 15.2212 20.0846C15.1999 20.0876 15.1786 20.0906 15.1573 20.0936C15.1083 20.1005 15.0594 20.1071 15.0105 20.1135C14.976 20.118 14.9413 20.1224 14.9066 20.1267C14.8662 20.1317 14.8261 20.1365 14.7859 20.1411C14.746 20.1458 14.706 20.1502 14.666 20.1546C14.6307 20.1584 14.5953 20.1621 14.56 20.1657C14.5192 20.1698 14.4783 20.1738 14.4375 20.1777C14.4033 20.1809 14.369 20.184 14.3347 20.187C14.3011 20.1899 14.2675 20.1927 14.2339 20.1954C14.1863 20.1993 14.1387 20.2029 14.0911 20.2063C14.0799 20.2071 14.0687 20.2079 14.0575 20.2087C13.9967 20.2129 13.936 20.2167 13.8753 20.2202C13.5744 20.2376 13.2735 20.2463 12.9725 20.2463C10.89 20.2463 8.80993 19.8303 6.73573 19.0006L6.81955 19.0334L6.67573 19.039L6.56973 19.0416L6.35772 19.0436C4.87596 19.0436 3.39668 18.7453 1.92339 18.151C1.69594 18.0593 1.547 17.8386 1.547 17.5933V15.4356C1.547 13.4942 2.69699 11.8214 4.35294 11.0612C3.73796 10.511 3.35102 9.71111 3.35102 8.82083C3.35102 7.16027 4.69717 5.81412 6.35772 5.81412C8.01828 5.81412 9.36443 7.16027 9.36443 8.82083C9.36443 9.27056 9.26569 9.69724 9.0887 10.0804C9.27756 9.94277 9.47376 9.81559 9.67612 9.69917L9.75225 9.65623C9.75902 9.65245 9.7658 9.64868 9.77259 9.64492C9.78576 9.63745 9.79908 9.63015 9.81242 9.62288C9.83347 9.61157 9.85452 9.60025 9.87563 9.58905C9.89073 9.58092 9.90598 9.57291 9.92126 9.56496C10.1312 9.4557 10.3476 9.35736 10.5699 9.27069C9.47774 8.51039 8.76309 7.24572 8.76309 5.81412C8.76309 3.48934 10.6477 1.60474 12.9725 1.60474ZM12.9725 10.0235L12.8536 10.0248C12.7791 10.0264 12.7049 10.0295 12.631 10.0342C12.6212 10.0347 12.6115 10.0353 12.6018 10.036L12.631 10.0342C12.5994 10.0361 12.568 10.0384 12.5366 10.0409L12.6018 10.036C12.5635 10.0386 12.5254 10.0416 12.4874 10.045L12.5366 10.0409C12.4076 10.0512 12.2797 10.066 12.1529 10.0853C12.1513 10.0854 12.1496 10.0857 12.1479 10.0859L12.1529 10.0853C12.115 10.0911 12.0771 10.0972 12.0394 10.1038L12.1479 10.0859C12.1092 10.0918 12.0707 10.0982 12.0323 10.1049L12.0394 10.1038C11.8484 10.137 11.6602 10.1803 11.4755 10.2333C11.4729 10.234 11.4703 10.2347 11.4677 10.2355L11.4755 10.2333C11.3674 10.2644 11.2605 10.2987 11.1549 10.3363C11.1408 10.3413 11.1265 10.3465 11.1123 10.3517L11.1549 10.3363C11.1249 10.347 11.095 10.3579 11.0651 10.3692L11.1123 10.3517C11.0795 10.3637 11.0469 10.376 11.0145 10.3885L11.0651 10.3692C11.0357 10.3802 11.0063 10.3916 10.9771 10.4032L11.0145 10.3885C10.8644 10.4468 10.7175 10.5116 10.5742 10.5826C10.5695 10.5846 10.5649 10.5869 10.5604 10.5891L10.5742 10.5826C10.4363 10.6509 10.3017 10.7249 10.1707 10.8042C10.1644 10.8076 10.1583 10.8113 10.1522 10.815L10.1707 10.8042C9.74656 11.0614 9.36055 11.3752 9.02318 11.7351C9.02245 11.7356 9.0217 11.7364 9.02096 11.7372L9.02318 11.7351C9.00144 11.7583 8.97991 11.7816 8.95857 11.8052C8.94636 11.8185 8.93429 11.832 8.92228 11.8456L8.95857 11.8052C8.9307 11.836 8.90317 11.8671 8.87599 11.8986C8.86088 11.916 8.84594 11.9335 8.83109 11.9511L8.87599 11.8986C8.05624 12.8472 7.56041 14.0835 7.56041 15.4356V18.0298L7.6212 18.0529C7.6928 18.0793 7.76439 18.1053 7.83598 18.1307C7.86924 18.1425 7.90264 18.1543 7.93603 18.1659C8.14315 18.238 8.3501 18.3056 8.557 18.3688C8.66115 18.4006 8.76544 18.4313 8.86971 18.4609C9.12459 18.5333 9.37937 18.5989 9.63407 18.6577C9.77112 18.6894 9.90817 18.7191 10.0452 18.7469C10.2109 18.7805 10.3764 18.8112 10.5419 18.839C10.639 18.8553 10.736 18.8707 10.833 18.8851C10.976 18.9063 11.1189 18.9253 11.2618 18.9422C11.4288 18.962 11.5958 18.9789 11.7627 18.9929C11.8212 18.9978 11.8795 19.0024 11.9378 19.0065C12.0537 19.0148 12.1696 19.0218 12.2855 19.0273C12.4432 19.0348 12.6008 19.0397 12.7584 19.042L12.7452 19.0415L12.7584 19.042L12.9725 19.0436L13.1865 19.042C13.3093 19.0402 13.4321 19.0368 13.555 19.0319C13.5789 19.0309 13.6028 19.0299 13.6268 19.0288L13.555 19.0319C13.6149 19.0294 13.6748 19.0267 13.7347 19.0235L13.6268 19.0288C13.6989 19.0255 13.771 19.0217 13.8432 19.0174L13.7347 19.0235C13.8138 19.0193 13.8929 19.0145 13.972 19.009L13.8432 19.0174C13.9153 19.013 13.9875 19.0081 14.0597 19.0027L13.972 19.009C14.0413 19.0042 14.1106 18.9989 14.1799 18.9931L14.0597 19.0027C14.134 18.9971 14.2084 18.9909 14.2828 18.9841L14.1799 18.9931C14.2466 18.9875 14.3133 18.9815 14.38 18.975L14.2828 18.9841C14.3557 18.9775 14.4287 18.9703 14.5017 18.9626L14.38 18.975C14.4702 18.9662 14.5603 18.9566 14.6504 18.9461L14.5017 18.9626C14.5677 18.9556 14.6336 18.9482 14.6996 18.9403L14.6504 18.9461C14.7096 18.9392 14.7688 18.932 14.828 18.9244L14.6996 18.9403C14.7845 18.9301 14.8694 18.9192 14.9544 18.9076L14.828 18.9244C14.8951 18.9157 14.9621 18.9067 15.0291 18.8971L14.9544 18.9076C15.0232 18.8981 15.092 18.8882 15.1608 18.8778L15.0291 18.8971C15.1096 18.8856 15.1901 18.8735 15.2707 18.8607L15.1608 18.8778C15.2286 18.8675 15.2963 18.8567 15.3641 18.8455L15.2707 18.8607C15.3526 18.8476 15.4345 18.8339 15.5164 18.8195L15.3641 18.8455C15.4314 18.8344 15.4986 18.8228 15.5659 18.8107L15.5164 18.8195C15.5844 18.8075 15.6525 18.795 15.7205 18.7821L15.5659 18.8107C15.6511 18.7954 15.7363 18.7793 15.8216 18.7625L15.7205 18.7821C15.7808 18.7706 15.841 18.7588 15.9012 18.7466L15.8216 18.7625C15.903 18.7465 15.9843 18.7297 16.0657 18.7123L15.9012 18.7466C15.9758 18.7315 16.0503 18.7158 16.1248 18.6995L16.0657 18.7123C16.1299 18.6986 16.194 18.6844 16.2582 18.6698L16.1248 18.6995C16.2046 18.6821 16.2844 18.664 16.3642 18.6453L16.2582 18.6698C16.329 18.6537 16.3998 18.6371 16.4706 18.6199L16.3642 18.6453C16.4354 18.6286 16.5066 18.6114 16.5778 18.5936L16.4706 18.6199C16.5397 18.6032 16.6089 18.586 16.678 18.5682L16.5778 18.5936C16.659 18.5733 16.7403 18.5524 16.8215 18.5307L16.678 18.5682C16.739 18.5526 16.7999 18.5366 16.8609 18.5202L16.8215 18.5307C16.8862 18.5135 16.951 18.4958 17.0157 18.4777L16.8609 18.5202C16.9565 18.4945 17.0521 18.4678 17.1477 18.4402L17.0157 18.4777C17.089 18.4572 17.1624 18.4361 17.2357 18.4145L17.1477 18.4402C17.2151 18.4207 17.2824 18.4008 17.3497 18.3804L17.2357 18.4145C17.3101 18.3926 17.3844 18.3701 17.4588 18.347L17.3497 18.3804C17.4194 18.3593 17.4892 18.3377 17.5589 18.3156L17.4588 18.347C17.5314 18.3245 17.604 18.3014 17.6765 18.2778L17.5589 18.3156C17.6492 18.2869 17.7395 18.2575 17.8298 18.2271L17.6765 18.2778C17.7484 18.2544 17.8203 18.2305 17.8922 18.206L17.8298 18.2271C17.9974 18.1708 18.165 18.1117 18.3327 18.0495L18.3845 18.0298V15.4356C18.3845 14.1469 17.9342 12.9635 17.1823 12.0341C17.167 12.0151 17.1515 11.9963 17.1359 11.9775L17.1823 12.0341C17.1612 12.008 17.1398 11.9821 17.1183 11.9565L17.1359 11.9775C17.0882 11.9201 17.0394 11.8638 16.9895 11.8086C16.9806 11.7989 16.9718 11.7892 16.963 11.7795L16.9895 11.8086C16.9679 11.7846 16.946 11.7608 16.924 11.7373L16.963 11.7795C16.9024 11.7134 16.8402 11.6489 16.7764 11.5859C16.7701 11.5793 16.7636 11.5729 16.7571 11.5665L16.7764 11.5859C16.7546 11.5643 16.7327 11.543 16.7105 11.5218L16.7571 11.5665C16.7324 11.5424 16.7075 11.5185 16.6825 11.4948L16.7105 11.5218C16.3027 11.1322 15.8341 10.8057 15.3203 10.5579C15.3034 10.5495 15.2863 10.5414 15.2693 10.5334L15.3203 10.5579C15.2801 10.5385 15.2396 10.5196 15.1988 10.5012C15.1747 10.4901 15.1505 10.4794 15.1262 10.4689L15.1988 10.5012C15.1697 10.488 15.1406 10.4752 15.1113 10.4625L15.1262 10.4689C15.0961 10.4558 15.0659 10.443 15.0356 10.4305L15.1113 10.4625C15.0717 10.4455 15.0319 10.4289 14.9918 10.4128L15.0356 10.4305C14.9997 10.4158 14.9637 10.4014 14.9276 10.3874L14.9918 10.4128C14.9622 10.4009 14.9325 10.3892 14.9026 10.3778L14.9276 10.3874C14.8193 10.3455 14.7095 10.307 14.5983 10.2721C14.5866 10.2683 14.5748 10.2646 14.563 10.261L14.5983 10.2721C14.5592 10.2598 14.52 10.2479 14.4806 10.2365L14.563 10.261C14.5306 10.2511 14.4981 10.2414 14.4655 10.2321L14.4806 10.2365C14.3336 10.194 14.1843 10.1576 14.0331 10.1276C14.0256 10.1259 14.0182 10.1245 14.0109 10.123L14.0331 10.1276C13.958 10.1126 13.8825 10.0993 13.8065 10.0875C13.8 10.0864 13.7936 10.0854 13.7872 10.0844L13.8065 10.0875C13.7264 10.0751 13.6458 10.0645 13.5649 10.0557C13.5591 10.0549 13.5532 10.0543 13.5472 10.0537L13.5649 10.0557C13.5283 10.0517 13.4916 10.048 13.4549 10.0448L13.5472 10.0537C13.5011 10.0488 13.4548 10.0445 13.4084 10.0408L13.4549 10.0448C13.421 10.0418 13.3871 10.0391 13.3531 10.0367L13.4084 10.0408C13.3731 10.038 13.3377 10.0355 13.3022 10.0334L13.3531 10.0367C13.3138 10.034 13.2744 10.0317 13.2349 10.0298L13.3022 10.0334C13.2658 10.0312 13.2293 10.0294 13.1928 10.0279L13.2349 10.0298C13.1478 10.0256 13.0603 10.0235 12.9725 10.0235ZM19.5872 11.8275C19.2499 11.8275 18.9197 11.8737 18.6034 11.9632C19.2273 12.9725 19.5872 14.162 19.5872 15.4356V17.8409C20.7856 17.8409 21.986 17.6219 23.191 17.1819L23.1953 17.1801V15.4356C23.1953 13.4736 21.6292 11.8773 19.6789 11.8287L19.5872 11.8275ZM6.35772 11.8275C4.36506 11.8275 2.74968 13.4429 2.74968 15.4356V17.1804L2.95539 17.2534C4.02938 17.6237 5.0998 17.8186 6.16849 17.8391L6.35772 17.8409V15.4356C6.35772 14.162 6.71766 12.9725 7.34135 11.9632C7.02522 11.8737 6.695 11.8275 6.35772 11.8275ZM19.5872 7.0168C18.5909 7.0168 17.7832 7.82449 17.7832 8.82083C17.7832 9.81716 18.5909 10.6248 19.5872 10.6248C20.5836 10.6248 21.3912 9.81716 21.3912 8.82083C21.3912 7.82449 20.5836 7.0168 19.5872 7.0168ZM6.35772 7.0168C5.36139 7.0168 4.5537 7.82449 4.5537 8.82083C4.5537 9.81716 5.36139 10.6248 6.35772 10.6248C7.35406 10.6248 8.16175 9.81716 8.16175 8.82083C8.16175 7.82449 7.35406 7.0168 6.35772 7.0168ZM12.9725 2.80742C11.3119 2.80742 9.96577 4.15357 9.96577 5.81412C9.96577 7.47468 11.3119 8.82083 12.9725 8.82083C14.633 8.82083 15.9792 7.47468 15.9792 5.81412C15.9792 4.15357 14.633 2.80742 12.9725 2.80742Z\" [attr.fill]=\"fill()\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\"/>\n</svg>"
  },
  {
    "selector": "app-mention-icon",
    "className": "MentionIconComponent",
    "path": "shared/icons/mention-icon/mention-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\">\n  <g clip-path=\"url(#clip0_5001_1302)\">\n    <path d=\"M7.91804 4.10314V6.50054C7.91804 6.88204 8.06959 7.24791 8.33935 7.51767C8.60911 7.78743 8.97498 7.93898 9.35648 7.93898C9.73798 7.93898 10.1039 7.78743 10.3736 7.51767C10.6434 7.24791 10.7949 6.88204 10.7949 6.50054V6.02106C10.7949 4.93889 10.4287 3.88856 9.75602 3.04087C9.08333 2.19318 8.14366 1.59797 7.08981 1.35203C6.03595 1.10609 4.92989 1.22389 3.95147 1.68626C2.97305 2.14864 2.17982 2.9284 1.70075 3.89875C1.22169 4.86911 1.08496 5.97299 1.31281 7.0309C1.54066 8.08881 2.11968 9.03854 2.95573 9.72565C3.79178 10.4128 4.83567 10.7968 5.91769 10.8155C6.9997 10.8341 8.05618 10.4861 8.91536 9.82813M7.91804 6.02106C7.91804 7.0803 7.05936 7.93898 6.00012 7.93898C4.94089 7.93898 4.08221 7.0803 4.08221 6.02106C4.08221 4.96182 4.94089 4.10314 6.00012 4.10314C7.05936 4.10314 7.91804 4.96182 7.91804 6.02106Z\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </g>\n  <defs>\n    <clipPath id=\"clip0_5001_1302\">"
  },
  {
    "selector": "app-message",
    "className": "MessageComponent",
    "path": "shared/components/message/message.component.ts",
    "inputs": [
      "conversation",
      "systemMessageOnly",
      "isFeedbackMessage",
      "isInternalChat"
    ],
    "snippet": "<div class=\"chat__message\"\n     [ngClass]=\"{\n                'chat__message--left': chatMessageAlignLeft(),\n                'chat__message--right': chatMessageAlignRight(),\n              }\">\n  @if (message().deleted) {"
  },
  {
    "selector": "app-message-icon",
    "className": "MessageIconComponent",
    "path": "shared/icons/message-icon/message-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 25 25\" fill=\"none\">\n  <path d=\"M21.3638 11.6303C21.3672 12.9501 21.0588 14.2522 20.4638 15.4303C19.7582 16.842 18.6735 18.0295 17.3312 18.8596C15.9889 19.6897 14.442 20.1297 12.8638 20.1303C11.5439 20.1337 10.2419 19.8253 9.06377 19.2303L3.36377 21.1303L5.26377 15.4303C4.6687 14.2522 4.36033 12.9501 4.36377 11.6303C4.36438 10.052 4.80438 8.50513 5.63449 7.16283C6.4646 5.82053 7.65202 4.73584 9.06377 4.03028C10.2419 3.43521 11.5439 3.12684 12.8638 3.13028H13.3638C15.4481 3.24527 17.4168 4.12504 18.8929 5.60114C20.369 7.07723 21.2488 9.04593 21.3638 11.1303V11.6303Z\"  [attr.stroke]=\"color()\"\n        [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-message-notification",
    "className": "MessageNotificationComponent",
    "path": "shared/components/message-notification/message-notification.component.ts",
    "inputs": [],
    "snippet": "<section class=\"message-notification-container\">\n  <div class=\"header\">\n    <span class=\"header__text\">New Message:</span>\n    <span class=\"header__name\">{{ messagePayload.display_name }}</span>\n  </div>\n  <button class=\"close-btn\" (click)=\"close()\">"
  },
  {
    "selector": "app-message-social-sharing",
    "className": "MessagingSocialSharingComponent",
    "path": "shared/model-based-components/conversation-messages/messaging-social-sharing/messaging-social-sharing.component.ts",
    "inputs": [],
    "snippet": "<div class=\"overlay\" *ngIf=\"show\">\n  <div class=\"popup\">\n    <button class=\"close-btn\" (click)=\"onClose()\">×</button>\n\n    <h2>This Topic Isn't Supported (Yet)</h2>\n    <p>We don't have counsellors for this topic right now. But you can help us bring attention to it.<br>"
  },
  {
    "selector": "app-message-square-icon",
    "className": "MessageSquareIconComponent",
    "path": "shared/icons/message-square-icon/message-square-icon.component.ts",
    "inputs": [],
    "snippet": ""
  },
  {
    "selector": "app-meter",
    "className": "MeterComponent",
    "path": "shared/complex-ui-components/meter/meter.component.ts",
    "inputs": [
      "rotateCoefficient",
      "color"
    ],
    "snippet": "<app-icon-vector\n  class=\"review-score_vector-icon\"\n  [color]=\"color()\"\n  [rotateDeg]=\"rotateDeg()\"\n></app-icon-vector>"
  },
  {
    "selector": "app-minimized-invitation-page",
    "className": "MinimizedInvitationPageComponent",
    "path": "pages/organization-invitation/components/minimized-invitation-page/minimized-invitation-page.component.ts",
    "inputs": [],
    "snippet": "<app-button\n  class=\"minimized-invitation\"\n  [size]=\"buttonSize()\"\n  btnUIType=\"primary\"\n  (click)=\"navigateToInvitationPage()\"\n>"
  },
  {
    "selector": "app-mobile-conversation",
    "className": "MobileConversationComponent",
    "path": "pages/conversation/components/mobile-conversation/mobile-conversation.component.ts",
    "inputs": [
      "conversation",
      "activeConversationPartners",
      "activeConversationRater"
    ],
    "snippet": "<app-mobile-conversation-details\n  [conversation]=\"isInternal() ? internalChatConversation() : conversation()\"\n  [(isInternal)]=\"isInternal\"\n  (isRecordingEvent)=\"handleAudioRecord($event)\"\n  [activeConversationRater]=\"activeConversationRater()\"\n  [activeConversationPartners]=\"activeConversationPartners()\"></app-mobile-conversation-details>"
  },
  {
    "selector": "app-mobile-conversation-details",
    "className": "MobileConversationDetailsComponent",
    "path": "pages/conversation/components/mobile-conversation-details/mobile-conversation-details.component.ts",
    "inputs": [
      "activeConversationPartners",
      "activeConversationRater",
      "showChatHeading",
      "showFinishQuestionnaireButton",
      "anonUser"
    ],
    "snippet": "@if (conversation && selected() === 'internal_chat' && currentPermissions && currentPermissions()?.isCounselor()) {\n<ng-container *ngTemplateOutlet=\"conversationBlock\"></ng-container>\n}\n\n@if (conversation && selected() === 'client_chat') {\n<ng-container *ngTemplateOutlet=\"conversationBlock\"></ng-container>"
  },
  {
    "selector": "app-mobile-current-route",
    "className": "MobileCurrentRouteComponent",
    "path": "shared/modules/header/mobile-current-route/mobile-current-route.component.ts",
    "inputs": [
      "openMenuState"
    ],
    "snippet": "@if(pathTitle$ | async; as path) {\n  <div class=\"icon\">\n    @switch (path) {\n      @case ('home') {\n        <app-home-icon [color]=\"openMenuState() ? '#F5F5F5': '#1E1E1E'\" [strokeWidth]=\"2.5\"></app-home-icon>\n      }"
  },
  {
    "selector": "app-mobile-header",
    "className": "MobileHeaderComponent",
    "path": "shared/components/mobile-header/mobile-header.component.ts",
    "inputs": [
      "title",
      "subtitle"
    ],
    "snippet": "<h2 class=\"get-help__title\">{{ title() }}</h2>\n<p class=\"get-help__subtitle\">{{ subtitle() }}</p>"
  },
  {
    "selector": "app-mobile-menu",
    "className": "MobileMenuComponent",
    "path": "pages/conversation/components/mobile-menu/mobile-menu.component.ts",
    "inputs": [
      "positionBy",
      "theme"
    ],
    "snippet": "<div class=\"minimal-switcher\">\n  <app-switch [control]=\"viewModeControl\" label=\"Minimalistic Version\"></app-switch>\n</div>\n<ul>\n  @for (item of items(); track item.param) {\n    @if (item.id === 'lupai') {"
  },
  {
    "selector": "app-mock-wrap",
    "className": "MockWrapComponent",
    "path": "pages/conversation/components/mock-wrap/mock-wrap.component.ts",
    "inputs": [
      "selected"
    ],
    "snippet": "<div class=\"mock-content\" (mouseenter)=\"this.isHoveredItem.set(true)\" (mouseleave)=\"this.isHoveredItem.set(false)\"\n  [ngClass]=\"{ 'active': isHoveredItem()}\">\n\n  @if(selected() === 'robots') {\n  <div class=\"stretch-block\" (click)=\"switchHoverState()\">\n    <img class=\"mock-screen\" src=\"assets/mocks/lupai/lupai-top.png\">"
  },
  {
    "selector": "app-modal",
    "className": "ModalComponent",
    "path": "shared/components/modal/modal.component.ts",
    "inputs": [],
    "snippet": "<div class=\"backdrop\" (click)=\"onClose()\"></div>\n<div class=\"alertbox\">\n  <ng-content></ng-content>\n</div>"
  },
  {
    "selector": "app-modal-select",
    "className": "ModalSelectComponent",
    "path": "shared/complex-ui-components/modal-select/modal-select.component.ts",
    "inputs": [],
    "snippet": "<div class=\"modal-select\">\n  <app-button-close\n    class=\"modal-select_close-icon_btn\"\n    (click)=\"close()\"\n  ></app-button-close>\n  <h4 class=\"modal-select_title\""
  },
  {
    "selector": "app-more-icebreaker",
    "className": "MoreIcebreakerComponent",
    "path": "pages/profile/components/_child/ice-breakers-list/more-icebreaker/more-icebreaker.component.ts",
    "inputs": [],
    "snippet": "<div class=\"load-more\">\n<span>LOAD MORE CAPSULES\nFROM THIS COUNSELOR</span>\n  <app-icon-visible color=\"#757575\" strokeWidth=\"3.5\"></app-icon-visible>\n</div>\n<p class=\"help-text\">"
  },
  {
    "selector": "app-more-menu",
    "className": "MoreMenuComponent",
    "path": "shared/more-menu/more-menu.component.ts",
    "inputs": [],
    "snippet": "<div class=\"dropdown-container\">\n  <button class=\"more-btn\" (click)=\"toggleDropdown()\">\n    <app-icon-more-vertical\n      class=\"more-icon\"\n      color=\"#000000\"\n      strokeWidth=\"2.6\""
  },
  {
    "selector": "app-move-icon",
    "className": "MoveIconComponent",
    "path": "shared/icons/move-icon/move-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\" fill=\"none\">\n  <g clip-path=\"url(#clip0_5980_897)\">\n    <path d=\"M5.97253 9.21069L2.97253 12.2107M2.97253 12.2107L5.97253 15.2107M2.97253 12.2107H22.9725M9.97253 5.21069L12.9725 2.21069M12.9725 2.21069L15.9725 5.21069M12.9725 2.21069V22.2107M15.9725 19.2107L12.9725 22.2107M12.9725 22.2107L9.97253 19.2107M19.9725 9.21069L22.9725 12.2107M22.9725 12.2107L19.9725 15.2107\" [attr.stroke]=\"color()\" [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </g>\n  <defs>\n    <clipPath id=\"clip0_5980_897\">"
  },
  {
    "selector": "app-my-advisers-select",
    "className": "MyAdvisersSelectComponent",
    "path": "pages/upload/my-advisers-select/my-advisers-select.component.ts",
    "inputs": [],
    "snippet": "<div class=\"my-advisers-select\">\n  <app-small-spinner diameter=\"20\" *ngIf=\"isLoading\"></app-small-spinner>\n\n  <div class=\"no-advisors\" *ngIf=\"!isLoading && !sortedAdvisors?.length\">\n    You don't have any trusted advisors yet\n  </div>"
  },
  {
    "selector": "app-my-projects",
    "className": "MyProjectsComponent",
    "path": "pages/my-projects/my-projects.component.ts",
    "inputs": [],
    "snippet": "<div class=\"projects\">\n  <app-main-content-menu\n    [menuItems]=\"menuItems\"\n  ></app-main-content-menu>\n\n  <div class=\"cards-grid\" *ngIf=\"!menuItem.param\">"
  },
  {
    "selector": "app-my-skills-select",
    "className": "MySkillsSelectComponent",
    "path": "pages/upload/my-skills-select/my-skills-select.component.ts",
    "inputs": [],
    "snippet": "<div class=\"my-skills-select\">\n  <div class=\"my-skills-filter\" *ngIf=\"loadedSkills\">\n    <img\n      src=\"/assets/payments/timer-close@2x.png\"\n      class=\"{{ mySkillsControl.value ? 'close_active' : '' }}\"\n      (click)=\"didCancelFilter()\""
  },
  {
    "selector": "app-new-chat",
    "className": "NewChatComponent",
    "path": "pages/new-chat/new-chat.component.ts",
    "inputs": [],
    "snippet": "@if (isLoading()){\n  <div class=\"loading-container\">\n    <app-small-spinner></app-small-spinner>\n  </div>\n}\n"
  },
  {
    "selector": "app-new-conversation",
    "className": "NewConversationComponent",
    "path": "pages/conversations/components/new-conversation/new-conversation.component.ts",
    "inputs": [],
    "snippet": "<section class=\"confirmation-dialog\">\n  <div class=\"header-container\">\n    <h1 class=\"title\">{{ data.title | translate }}</h1>\n    <app-button\n      size=\"small\"\n      btnUIType=\"subtle\""
  },
  {
    "selector": "app-new-user-icon",
    "className": "NewUserIconComponent",
    "path": "shared/icons/new-user-icon/new-user-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 83 82\" fill=\"none\">\n  <path d=\"M41.165 82C30.2894 82 19.8625 77.6813 12.1742 69.9908C4.48327 62.3033 0.165039 51.8756 0.165039 41C0.165039 30.1244 4.48371 19.6975 12.1742 12.0092C19.8617 4.31823 30.2894 0 41.165 0C52.0406 0 62.4675 4.31867 70.1559 12.0092C77.8468 19.6967 82.165 30.1244 82.165 41C82.165 51.8756 77.8464 62.3025 70.1559 69.9908C62.4683 77.6818 52.0406 82 41.165 82ZM41.165 4.10044C31.3793 4.10044 21.9941 7.98859 15.072 14.9069C8.15319 21.8291 4.26548 31.2151 4.26548 41C4.26548 50.7849 8.15363 60.1709 15.072 67.0931C21.9942 74.0118 31.3801 77.8996 41.165 77.8996C50.9499 77.8996 60.336 74.0114 67.2581 67.0931C74.1769 60.1709 78.0646 50.7849 78.0646 41C78.0646 31.2151 74.1764 21.8291 67.2581 14.9069C60.3359 7.98816 50.9499 4.10044 41.165 4.10044Z\" [attr.fill]=\"fill()\"/>\n  <path d=\"M53.4653 30.0667C53.4653 36.859 47.9576 42.3662 41.1658 42.3662C34.3739 42.3662 28.8662 36.8585 28.8662 30.0667C28.8662 23.2748 34.3739 17.7671 41.1658 17.7671C47.9576 17.7671 53.4653 23.2748 53.4653 30.0667Z\" [attr.fill]=\"fill()\"/>\n  <path d=\"M41.1649 79.2668C31.3047 79.26 21.8234 75.447 14.7062 68.6204C13.9477 67.8687 13.6949 66.7412 14.0639 65.7367C16.6947 58.1893 22.3527 52.0805 29.6784 48.8819C37.0003 45.6839 45.3306 45.6839 52.6524 48.8819C59.9777 52.0798 65.636 58.1892 68.2669 65.7367C68.636 66.7412 68.3831 67.8687 67.6246 68.6204C60.5077 75.4469 51.0261 79.2598 41.1659 79.2668H41.1649Z\" [attr.fill]=\"fill()\"/>\n  <path d=\"M65.7658 31.4331C61.8981 31.4331 58.4096 33.7633 56.9272 37.3371C55.4478 40.9143 56.2644 45.028 59.0012 47.7649C61.7379 50.5017 65.8516 51.3182 69.429 49.8388C73.0028 48.356 75.333 44.8675 75.333 41.0003C75.333 38.4618 74.3251 36.029 72.5313 34.2353C70.7375 32.4415 68.3044 31.4331 65.7658 31.4331ZM72.1481 42.5991H67.3647V47.3825H64.1668V42.5991H59.3834V39.4011H64.1668V34.6178H67.3647V39.4011H72.1481V42.5991Z\" [attr.fill]=\"fill()\"/>\n</svg>"
  },
  {
    "selector": "app-news-icon",
    "className": "NewsIconComponent",
    "path": "shared/icons/news-icon/news-icon.component.ts",
    "inputs": [
      "color"
    ],
    "snippet": "<svg viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g clip-path=\"url(#clip0_8442_14428)\">\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n          d=\"M4.04529 2.61121C5.39066 2.61121 6.48219 3.70274 6.48219 5.0481V34.8315C6.48219 37.9715 9.02826 40.5176 12.1683 40.5176H41.9543C43.2997 40.5176 44.3912 41.6091 44.3912 42.9545C44.3912 44.2999 43.2997 45.3914 41.9543 45.3914H12.1683C6.33747 45.3914 1.6084 40.6649 1.6084 34.8315V5.0481C1.6084 3.70274 2.69993 2.61121 4.04529 2.61121ZM39.8807 14.5442L41.3174 18.8113C41.7464 20.0881 43.1299 20.7735 44.4041 20.3445C45.6809 19.913 46.3663 18.5321 45.9374 17.2553L42.5968 7.34522C42.1729 6.08108 40.8097 5.39317 39.5405 5.80185L29.5213 9.0333C28.2419 9.44707 27.5363 10.8204 27.95 12.0998C28.3638 13.3817 29.7371 14.0848 31.0165 13.6711L35.6085 12.1912L30.2118 22.6315L24.1475 17.7958C23.6043 17.3617 22.9036 17.1815 22.2182 17.2983C21.5328 17.4176 20.9287 17.8212 20.5606 18.4101L12.8106 30.833C12.0973 31.9753 12.4451 33.4781 13.5874 34.1914C14.7297 34.9047 16.2324 34.5569 16.9432 33.4147L23.2487 23.3116L29.4932 28.2946C30.0644 28.749 30.8081 28.9241 31.5215 28.7718C32.2348 28.6195 32.844 28.155 33.1791 27.5077L39.8807 14.5442Z\"\n          [attr.fill]=\"color()\"\n    />"
  },
  {
    "selector": "app-newsfeed",
    "className": "NewsfeedComponent",
    "path": "pages/newsfeed/newsfeed.component.ts",
    "inputs": [],
    "snippet": "<div class=\"newsfeed\">\n  <div class=\"search-bar\" *ngIf=\"isMobile\">\n    <app-search-bar></app-search-bar>\n  </div>\n\n  <app-search-results *ngIf=\"selectedCategories.length\"></app-search-results>"
  },
  {
    "selector": "app-newsfeed-avpresentation",
    "className": "NewsfeedAvpresentationComponent",
    "path": "pages/newsfeed/newsfeed-item/newsfeed-avpresentation/newsfeed-avpresentation.component.ts",
    "inputs": [],
    "snippet": "<div class=\"newsfeed-avpresentation\">\n  <div class=\"newsfeed-avpresentation__track-controls\">\n    <p class=\"newsfeed-avpresentation__track-controls--title\">\n      {{ file.projectfile_title }}\n    </p>\n"
  },
  {
    "selector": "app-newsfeed-avpresentation-video",
    "className": "NewsfeedAvpresentationVideoComponent",
    "path": "pages/newsfeed/newsfeed-item/newsfeed-avpresentation-video/newsfeed-avpresentation-video.component.ts",
    "inputs": [],
    "snippet": "<div\n  class=\"newsfeed-avpresentation-video\"\n  [ngClass]=\"{ 'no-curves': !showCurves }\"\n>\n  <div class=\"newsfeed-avpresentation-video__track-controls\">\n    <p class=\"newsfeed-avpresentation-video__track-controls--title\">"
  },
  {
    "selector": "app-newsfeed-item",
    "className": "NewsfeedItemComponent",
    "path": "pages/newsfeed/newsfeed-item/newsfeed-item.component.ts",
    "inputs": [],
    "snippet": "@if(!isInUserActionMode && isProjectInfoMode) {\n  <app-project-card-v2\n    *ngIf=\"project\"\n    [isConversationsProject]=\"false\"\n    [isNewsfeedPresentation]=\"true\"\n    [project]=\"project\""
  },
  {
    "selector": "app-next-step",
    "className": "NextStepComponent",
    "path": "shared/components/next-step/next-step.component.ts",
    "inputs": [],
    "snippet": "<div class=\"step-btn\">\n  <ng-content></ng-content>\n</div>"
  },
  {
    "selector": "app-nextwork",
    "className": "NextworkComponent",
    "path": "pages/admin/nextwork/nextwork.component.ts",
    "inputs": [],
    "snippet": "<mat-sidenav-container class=\"side-nav-container\">\n  <mat-sidenav mode=\"side\" opened>\n    <div class=\"admin__menu\">\n      <ul class=\"nav\">\n        <li class=\"nav__item\">\n          <a"
  },
  {
    "selector": "app-nextwork-settings",
    "className": "NextworkSettingsComponent",
    "path": "pages/admin/nextwork/nextwork-settings/nextwork-settings.component.ts",
    "inputs": [],
    "snippet": "<div class=\"nextwork-settings\" *ngIf=\"settingsFormGroup\">\n  <form [formGroup]=\"settingsFormGroup\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"actions-container\">\n      <button type=\"submit\" class=\"btn action-button action-button--submit\">\n        <div *ngIf=\"isCreating\" class=\"spinner\" role=\"status\">\n          <app-small-spinner [diameter]=\"20\"></app-small-spinner>"
  },
  {
    "selector": "app-ngo-footer",
    "className": "NgoFooterComponent",
    "path": "pages/organizations/components/ngo-footer/ngo-footer.component.ts",
    "inputs": [],
    "snippet": "<footer class=\"ngo-footer\">\n  <div class=\"ngo-footer__content\">\n<!--    TODO temp hide-->\n<!--    <div class=\"ngo-footer__block ngo-footer__social-block\">-->\n<!--      <a href=\"/home\" class=\"ngo-footer__logo\">-->\n<!--        <app-ngo-footer-logo-icon></app-ngo-footer-logo-icon>-->"
  },
  {
    "selector": "app-ngo-footer-logo-icon",
    "className": "NgoFooterLogoIconComponent",
    "path": "shared/icons/ngo-footer-logo-icon/ngo-footer-logo-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"77\" viewBox=\"0 0 90 77\" fill=\"none\">\n  <g clip-path=\"url(#clip0_6165_3884)\">\n    <path d=\"M72.407 61.4228C72.3146 62.1746 72.667 62.3413 73.1015 62.3685C75.2878 62.491 77.4262 62.9502 79.5954 63.1849C80.0367 63.2326 80.2899 63.1781 80.0778 63.8415C79.6877 65.0559 79.154 66.2058 78.7332 67.4032C78.6134 67.7434 78.4047 67.8454 77.9668 67.6583C76.0987 66.8623 74.1964 66.1513 72.3146 65.3893C71.1582 64.9199 71.0624 64.9607 70.751 66.1377C70.4157 67.4032 70.0839 68.6721 69.6972 69.9239C69.4749 70.6383 69.8581 70.9139 70.4192 71.0601C71.6235 71.3731 72.8415 71.6453 74.0493 71.9446C75.1031 72.2032 76.15 72.4889 77.2072 72.7236C77.563 72.8019 77.5973 73.0026 77.6178 73.2849C77.6931 74.2545 77.4091 75.1763 77.2175 76.105C77.1012 76.6697 76.6495 76.3262 76.41 76.2547C75.192 75.8873 73.9877 75.4723 72.7868 75.0573C70.5013 74.2715 68.2295 73.4516 65.9371 72.6896C64.5994 72.244 64.5309 72.0909 64.921 70.7608C65.6087 68.4101 66.2143 66.0357 66.8643 63.6782C67.4288 61.6337 68.0071 59.5926 68.5887 57.5515C69.0574 55.9119 69.4167 54.245 69.9675 52.6257C70.1557 52.0746 70.3234 52.1052 70.8092 52.2719C73.3924 53.1734 75.9995 54.0102 78.5963 54.8811C80.112 55.388 81.614 55.9323 83.1399 56.4187C83.5129 56.5378 83.6702 56.7045 83.5402 57.0413C83.2255 57.8611 82.856 58.6605 82.5515 59.4838C82.312 60.1369 81.8672 60.1131 81.3608 59.909C79.2395 59.0449 77.1285 58.1468 74.997 57.31C74.3469 57.0549 73.7003 56.8303 73.5326 58.0074C73.3924 59.0177 72.8791 59.977 72.5404 60.9602C72.4652 61.1779 72.4173 61.4024 72.4138 61.4194L72.407 61.4228Z\" fill=\"#FAD44F\"/>\n    <path d=\"M63.4875 71.8698C62.071 72.1385 60.7777 71.7711 59.5118 71.4446C58.9746 71.3051 58.8104 70.5329 58.5264 70.0294C57.1339 67.5529 55.7893 65.0525 54.4207 62.5658C53.9281 61.6711 52.9803 61.2493 52.2345 60.4567C51.8752 61.4296 51.9676 62.3957 51.7794 63.3074C51.5468 64.4198 51.2936 65.573 51.2765 66.7194C51.2594 67.9203 50.7359 69.0361 50.7906 70.2335C50.8077 70.6247 50.5511 70.7438 50.2124 70.7438C49.9455 70.7438 49.6787 70.7404 49.4152 70.7132C48.074 70.5703 48.0159 70.5261 48.0809 69.213C48.3341 64.2089 48.8267 59.215 48.9636 54.2008C49.0012 52.7958 49.2715 51.384 49.2784 49.9621C49.2784 49.6525 49.2886 49.3191 49.7129 49.3294C50.2637 49.343 50.7393 48.9994 51.2559 48.9926C54.171 48.9654 57.086 48.4449 60.001 48.9551C63.0187 49.4824 64.0041 51.7242 63.3917 54.3742C62.8271 56.8168 61.6262 58.7728 59.6555 60.29C59.4502 60.4499 59.2381 60.6778 59.002 60.7152C57.8627 60.9057 57.914 61.4126 58.3896 62.2869C60.1071 65.4302 61.7596 68.6109 63.484 71.8664L63.4875 71.8698ZM52.0908 56.7963C52.0839 57.953 54.3284 59.6266 55.714 59.0483C57.175 58.4394 58.499 57.5788 59.5323 56.3575C60.1413 55.6397 60.4561 54.4117 59.3578 53.5748C58.9062 53.2312 58.4477 52.9353 57.9448 52.704C56.4257 51.9964 54.8963 51.3126 53.1719 51.2684C52.7853 51.2582 52.4569 51.248 52.4295 51.7923C52.3474 53.3401 52.2242 54.8845 52.0908 56.7963Z\" fill=\"#FAD44F\"/>\n    <path d=\"M51.3448 29.194C51.3004 31.1398 50.7153 32.987 50.421 34.8886C50.1542 36.6031 49.747 38.2938 49.4015 39.9947C49.3604 40.1886 49.3125 40.3791 49.2749 40.573C49.1757 41.0901 49.4528 41.8283 48.7103 42.0018C47.9337 42.1855 46.2709 41.1275 46.0827 40.5152C45.3642 38.1816 44.6183 35.8581 43.8862 33.5279C43.1471 31.167 42.3636 28.8164 41.6896 26.4351C41.2141 24.7512 41.2825 24.7818 43.0719 24.707C43.8759 24.6729 44.1941 25.0233 44.4131 25.6833C45.3608 28.5476 46.3256 31.4051 47.2768 34.2661C47.3315 34.4293 47.3726 34.6096 47.5642 34.6164C47.8584 34.6301 47.9474 34.3817 48.0021 34.1572C48.2929 33.0142 48.5735 31.8678 48.854 30.7214C49.398 28.4932 49.9386 26.265 50.4861 24.0368C50.6263 23.4687 51.0951 23.5333 51.5262 23.5027C52.1044 23.4585 52.6142 23.5741 52.7887 24.1865C53.4969 26.629 54.1641 29.0851 54.8723 31.5276C55.2726 32.9087 55.7208 34.2763 56.1519 35.6608C56.5282 35.5758 56.3982 35.256 56.429 35.0349C56.9696 31.0956 57.5068 27.1529 58.0337 23.2102C58.1055 22.6727 58.3416 22.6148 58.7658 22.8666C59.6075 23.3666 60.4492 23.8701 61.3045 24.3498C61.6877 24.5641 61.6706 24.8975 61.5851 25.2104C60.8426 27.9897 60.0112 30.7486 59.3509 33.5449C58.9369 35.2934 58.4408 37.0147 58.0234 38.7599C57.8181 39.6171 57.5239 40.4574 57.346 41.318C57.2194 41.9406 56.6856 42.1107 56.2853 42.4134C56.0082 42.6243 55.7619 42.5223 55.6421 42.1175C54.9852 39.8927 54.3146 37.6713 53.6235 35.4533C52.97 33.3544 52.2926 31.2657 51.6254 29.1701C51.5296 29.1769 51.4338 29.1837 51.3414 29.1906L51.3448 29.194Z\" fill=\"#FAD44F\"/>\n    <path d=\"M67.4597 13.7258C67.7813 11.1064 68.0995 8.48364 68.428 5.86424C68.534 5.01038 68.688 4.16333 68.7564 3.30948C68.8009 2.73457 69.0609 2.50665 69.6118 2.43861C70.3029 2.35357 70.9974 2.24131 71.6646 2.05421C72.5473 1.80247 72.756 1.99637 72.5508 2.91827C72.0478 5.17367 71.6441 7.44949 71.1959 9.7185C70.4637 13.4129 69.7452 17.1072 68.9788 20.7914C68.9001 21.169 69.0951 21.8562 68.404 21.8596C67.7026 21.8596 67.0081 21.8868 66.5975 21.0023C65.4137 18.4578 64.1204 15.9608 62.875 13.4469C62.2044 12.0998 61.5407 10.7492 60.6545 9.42934C60.5827 9.79674 60.5006 10.1607 60.4424 10.5315C59.9839 13.5013 59.5084 16.4711 59.0944 19.4477C58.9986 20.1247 58.807 20.1723 58.2253 19.9308C56.193 19.0803 56.1725 19.0973 56.4257 16.9167C57.0107 11.8957 57.6505 6.88138 58.1706 1.8535C58.3075 0.536995 59.3236 0.819346 60.0284 0.516584C60.8017 0.183206 60.8769 0.897588 61.0925 1.33302C63.0016 5.18388 64.9005 9.04154 66.8028 12.8958C66.9431 13.185 67.1005 13.4639 67.2476 13.7497C67.3194 13.7463 67.3947 13.7394 67.4665 13.736L67.4597 13.7258Z\" fill=\"#1F62AE\"/>"
  },
  {
    "selector": "app-ngo-ngo-logo-icon",
    "className": "NgoLogoIconComponent",
    "path": "shared/icons/ngo-logo-icon/ngo-logo-icon.component.ts",
    "inputs": [],
    "snippet": "<svg viewBox=\"0 0 256 256\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M201.02 104.028C201.02 82.349 183.286 64.7749 161.409 64.7749C148.807 64.7749 137.597 70.6195 130.346 79.7081L130.131 79.8026C123.413 73.1731 115.815 69.2876 108.869 66.9976C108.901 66.979 108.928 66.9518 108.96 66.9331C104.928 65.5525 100.615 64.7734 96.1058 64.7734C74.2269 64.7749 56.4902 82.3476 56.4902 104.028C56.4902 108.026 57.1045 111.882 58.2246 115.518C58.2318 115.508 58.2434 115.498 58.2549 115.488C61.397 126.659 67.8531 133.671 69.8693 135.396L78.4298 143.505L78.94 143.995L78.4081 144.535C75.8355 147.142 75.8919 151.322 78.5238 153.866C81.1542 156.411 85.3687 156.36 87.9399 153.755L88.4934 153.211C88.5555 153.158 88.6322 153.124 88.7189 153.124C88.9212 153.124 89.0816 153.281 89.0816 153.485C89.0816 153.568 89.0484 153.638 88.9993 153.701L89.0065 153.707L88.4775 154.245C85.9034 156.852 85.9598 161.032 88.5917 163.573C91.2236 166.122 95.438 166.073 98.0092 163.461L98.5295 162.954C98.5946 162.877 98.6914 162.825 98.8012 162.825C99.005 162.825 99.1655 162.983 99.1655 163.185C99.1655 163.272 99.1308 163.349 99.0759 163.411L99.0773 163.414L99.0686 163.422C99.0614 163.43 99.0556 163.441 99.0469 163.447L98.5454 163.954C95.9728 166.559 96.0277 170.739 98.6596 173.283C101.293 175.829 105.507 175.781 108.077 173.174L108.621 172.62L108.631 172.631C108.693 172.584 108.768 172.55 108.85 172.55C109.053 172.55 109.215 172.709 109.215 172.911C109.215 172.991 109.183 173.06 109.137 173.12L109.141 173.124L109.112 173.154C109.108 173.16 109.103 173.163 109.099 173.17L108.61 173.667C106.038 176.273 106.093 180.452 108.725 182.997C111.357 185.544 115.574 185.494 118.142 182.884L118.769 182.248L118.592 182.476L127.446 190.828C129.83 193.074 132.948 194.311 136.229 194.311H136.398C139.866 194.264 143.094 192.866 145.484 190.377C147.803 187.958 149.044 184.664 148.934 181.267C149.073 181.273 149.219 181.279 149.394 181.273C152.855 181.233 156.075 179.837 158.466 177.347C160.775 174.94 161.998 171.798 161.938 168.439C162.091 168.444 162.286 168.449 162.458 168.449C165.922 168.404 169.15 167.007 171.54 164.518C173.863 162.096 175.104 158.805 174.993 155.407C175.132 155.412 175.322 155.42 175.45 155.415C178.914 155.371 182.137 153.973 184.525 151.484C188.915 146.921 189.147 139.921 185.369 135.058C194.591 127.868 201.02 116.542 201.02 104.028ZM179.365 146.619C178.342 147.684 176.852 148.295 175.272 148.295C173.787 148.295 172.412 147.769 171.403 146.817L162.06 138.172C161.468 137.739 160.739 137.476 159.944 137.476C157.963 137.476 156.354 139.073 156.354 141.039C156.354 142.173 156.902 143.177 157.743 143.829L166.178 151.755C168.427 153.879 168.518 157.419 166.379 159.647C165.356 160.717 163.864 161.329 162.284 161.329C160.803 161.329 159.427 160.804 158.417 159.849L149.4 151.268L149.395 151.276C148.754 150.696 147.907 150.33 146.97 150.33C144.989 150.33 143.378 151.926 143.378 153.896C143.378 154.844 143.76 155.702 144.373 156.343L144.363 156.352L153.12 164.603C155.346 166.726 155.428 170.264 153.305 172.482C152.282 173.545 150.791 174.157 149.21 174.157C147.724 174.157 146.351 173.631 145.344 172.68L136.443 164.355L136.437 164.362C135.788 163.706 134.883 163.298 133.883 163.298C131.899 163.298 130.291 164.893 130.291 166.863C130.291 167.902 130.748 168.823 131.463 169.476L140.116 177.621C142.364 179.745 142.455 183.288 140.319 185.517C139.297 186.582 137.804 187.195 136.224 187.195C134.739 187.195 133.367 186.672 132.357 185.716L123.543 177.405L124.071 176.872C126.643 174.263 126.587 170.081 123.954 167.536C121.323 164.989 117.11 165.041 114.535 167.646L114.233 167.951L114.224 167.94C114.158 168.014 114.064 168.061 113.952 168.061C113.753 168.061 113.594 167.902 113.594 167.705C113.594 167.59 113.647 167.493 113.73 167.427L114 167.158C116.573 164.548 116.516 160.368 113.884 157.824C111.254 155.273 107.038 155.328 104.464 157.937L104.149 158.257L104.142 158.251C104.079 158.297 104.004 158.334 103.92 158.334C103.721 158.334 103.559 158.174 103.559 157.975C103.559 157.893 103.59 157.823 103.637 157.763L103.631 157.757L103.662 157.727C103.666 157.721 103.669 157.715 103.673 157.712L103.935 157.446C106.506 154.835 106.453 150.658 103.818 148.11C101.186 145.565 96.9744 145.616 94.3974 148.221L94.0549 148.548C93.9899 148.635 93.8901 148.696 93.7716 148.696C93.5722 148.696 93.4103 148.532 93.4103 148.336C93.4103 148.223 93.4667 148.126 93.549 148.062L93.867 147.737C96.4353 145.128 96.3833 140.949 93.7485 138.401C91.1181 135.855 86.905 135.909 84.3295 138.516L83.9855 138.862L74.7169 129.963C74.6258 129.884 67.8199 123.956 64.6619 111.078C64.6865 111.07 64.7096 111.057 64.7342 111.048C64.2182 108.785 63.9205 106.441 63.9205 104.026C63.9205 86.445 78.3532 72.1434 96.0985 72.1434C98.7391 72.1434 101.296 72.4957 103.754 73.0958C103.756 73.0929 103.757 73.0886 103.757 73.0886C110.057 74.8043 117.25 77.9451 123.618 83.7095L90.8637 115.849V115.85C89.534 117.09 88.6914 118.839 88.6914 120.791C88.6914 124.551 91.7656 127.595 95.5551 127.595C95.7473 127.595 95.928 127.554 96.1188 127.537C96.1231 127.55 96.1289 127.557 96.1347 127.567C96.2821 127.55 96.431 127.515 96.5813 127.492C96.7619 127.464 96.9368 127.436 97.1146 127.403C102.565 126.334 112.847 115.489 122.205 109.683C127.483 106.457 130.631 105.436 136.421 105.436C141.245 105.436 145.63 107.247 148.96 110.205C149.359 110.498 149.778 110.856 150.247 111.313L170.273 130.367L170.267 130.384L178.973 138.646C181.228 140.768 181.501 144.393 179.365 146.619Z\" fill=\"#1E1E1E\"/>\n  <path d=\"M234.281 165.605V165.605C234.572 202.293 205.211 232.345 168.527 232.907L132.624 233.457\" stroke=\"#888888\" stroke-width=\"8\" stroke-miterlimit=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"4 24\"/>\n  <path d=\"M115.447 229.291C112.225 231.135 112.225 235.781 115.447 237.624L135.106 248.872C138.306 250.702 142.29 248.392 142.29 244.705L142.29 222.21C142.29 218.524 138.306 216.213 135.106 218.044L115.447 229.291Z\" fill=\"#888888\"/>\n  <path d=\"M23.277 90.3945V90.3945C22.9855 53.7068 52.3465 23.6548 89.031 23.0929L124.934 22.5428\" stroke=\"#888888\" stroke-width=\"8\" stroke-miterlimit=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"4 24\"/>\n  <path d=\"M142.111 26.7085C145.333 24.8653 145.333 20.2191 142.111 18.3758L122.452 7.12846C119.252 5.29774 115.268 7.60817 115.268 11.2948L115.268 33.7895C115.268 37.4762 119.252 39.7866 122.451 37.9559L142.111 26.7085Z\" fill=\"#888888\"/>"
  },
  {
    "selector": "app-no-x-icon",
    "className": "NoXIconComponent",
    "path": "shared/icons/no-x-icon/no-x-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\" fill=\"none\">\n  <path d=\"M12.2988 4.5708L4.29883 12.5708M4.29883 4.5708L12.2988 12.5708\" stroke=\"#1E1E1E\" [attr.stroke-width] = \"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-notification-bell-icon",
    "className": "NotificationBellIconComponent",
    "path": "shared/icons/notification-bell-icon/notification-bell-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n>\n  <path\n    fill-rule=\"evenodd\""
  },
  {
    "selector": "app-notifications",
    "className": "NotificationsComponent",
    "path": "pages/usersettings/sections/notifications/notifications.component.ts",
    "inputs": [],
    "snippet": "<app-section-header [title]=\"'notification.title' | translate\">\n  <app-notification-bell-icon></app-notification-bell-icon>\n</app-section-header>\n\n@for (permission of permissions; track permission.name) {\n  <app-switch"
  },
  {
    "selector": "app-onboarding",
    "className": "OnboardingComponent",
    "path": "pages/admin/onboarding/onboarding.component.ts",
    "inputs": [],
    "snippet": "<mat-sidenav-container class=\"side-nav-container\">\n  <mat-sidenav mode=\"side\" opened>\n    <div class=\"admin__menu\">\n      <ul class=\"nav\">\n        <li\n          class=\"nav__item\""
  },
  {
    "selector": "app-onboarding-modal",
    "className": "OnboardingModalComponent",
    "path": "shared/components/onboarding-modal/onboarding-modal.component.ts",
    "inputs": [],
    "snippet": "<div class=\"modal__container cards\" [@cardFlip]=\"state\">\n  <app-first-card\n    class=\"card\"\n    *ngIf=\"step === 1\"\n    [form]=\"form\"\n    [isLoading]=\"isLoading\""
  },
  {
    "selector": "app-onboarding-presentation",
    "className": "OnboardingPresentationComponent",
    "path": "pages/rateflow/onboarding-presentation/onboarding-presentation.component.ts",
    "inputs": [],
    "snippet": "<div *ngIf=\"currentStory\" class=\"onboarding-presentation\">\n  <app-modal (close)=\"didFinish()\">\n    <mat-icon class=\"presentation__item--close-icon\" (click)=\"didFinish()\"\n      >cancel</mat-icon\n    >\n"
  },
  {
    "selector": "app-open-heart-icon",
    "className": "OpenHeartIconComponent",
    "path": "shared/icons/open-heart-icon/open-heart-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 125 68\" fill=\"none\">\n  <g clip-path=\"url(#clip0_5448_1114)\">\n    <path d=\"M27.4306 19.3412C28.422 19.7932 29.4133 19.9426 30.3828 19.8041C31.345 19.6692 32.2416 19.2574 33.0689 18.5649C33.8926 17.8797 34.4466 17.0123 34.72 15.9808C35.274 14.3189 35.0188 12.8683 33.94 11.578C32.8721 10.3097 31.5163 9.56254 29.8653 9.36572C27.7951 9.43133 26.206 10.153 25.1016 11.538C24.001 12.9156 23.9317 14.738 24.8939 17.0159C25.59 18.113 26.4283 18.8893 27.4306 19.3412Z\" fill=\"#2C2C2C\"/>\n    <path d=\"M45.0896 31.6891L44.47 31.7438L38.336 31.5944C37.7893 31.3866 36.7396 30.2313 35.1869 28.1283C33.6343 26.0289 32.4279 24.5091 31.5641 23.5761C30.704 22.6503 29.432 22.0234 27.7445 21.7173C26.0497 21.4038 24.7085 21.2544 23.7098 21.2544C22.7112 21.2544 21.7271 21.2544 20.7649 21.2544C15.9357 21.2544 12.6336 21.9906 10.8332 23.474C9.03998 24.9538 7.42538 26.9365 5.97479 29.4149C4.5315 31.9005 4.38936 33.6172 5.56295 34.5903C7.35249 35.6181 8.90148 34.8965 10.2136 32.4181C11.522 29.9324 12.5571 28.5875 13.3152 28.3907H17.3462C17.1421 28.7333 16.2455 30.8363 14.6637 34.6924C13.0746 38.5557 12.0068 44.5804 11.4528 52.7919C4.42216 53.4078 0.71916 54.2643 0.340113 55.3687C-0.0389341 56.473 0.0485382 57.5081 0.606175 58.4776C1.15288 59.4398 5.49734 59.6439 13.625 59.0935C16.1107 59.0243 17.6232 58.2042 18.1808 56.6115C18.866 47.9918 19.2415 43.9316 19.3143 44.4054C19.3872 44.8975 19.8829 46.1367 20.816 48.1339C21.749 50.1312 23.2652 53.2292 25.3682 57.4425C27.4639 61.6375 29.1003 64.0576 30.2812 64.6735C31.4475 65.2968 32.5336 65.2968 33.5323 64.6735C34.5309 64.0576 34.8589 63.1173 34.52 61.8817C34.1664 60.6425 33.2261 58.4156 31.6735 55.2156C30.1208 52.0083 29.093 49.8032 28.5682 48.5968C28.0543 47.3904 27.4639 45.9289 26.8151 44.2013C26.1554 42.4774 25.8821 41.2273 25.9878 40.4291C26.108 39.5143 26.2721 38.7015 26.6037 37.3821C26.9135 36.1357 27.555 33.5516 28.5172 29.6262C29.4101 30.4463 30.1719 31.2372 30.7951 31.9953C31.4074 32.757 32.1327 33.5516 32.9673 34.3716C33.7947 35.2063 34.6512 35.9316 35.5478 36.5475C36.3022 37.0687 42.3633 37.0031 45.1187 36.6933C45.3155 36.7261 47.6591 36.9083 47.4112 34.1894C47.2873 32.819 46.3725 31.6891 45.0896 31.6891Z\" fill=\"#2C2C2C\"/>\n    <path d=\"M53.0471 6.16045C55.5717 3.61561 60.0265 0.583984 66.9504 0.583984H67.1803C77.913 1.34783 81.7257 7.55358 84.9677 14.3886C85.1223 14.7329 85.4671 14.9546 85.8476 14.9546C86.2281 14.9546 86.5768 14.7329 86.7354 14.3886C89.8704 7.55358 94.563 0.583984 105.541 0.583984H105.811C114.534 1.14203 120.907 6.17628 123.242 14.3886C125.79 23.3371 122.643 33.3106 118.39 39.2354C114.709 44.3567 109.596 48.7419 104.65 52.9806C103.833 53.6772 103.033 54.3698 102.236 55.0545C99.204 57.6904 96.6913 59.5188 94.0279 61.466C91.6895 63.1718 89.0579 65.0874 85.7287 67.8064C82.8791 65.2536 79.4746 62.6375 75.8878 59.879C75.1545 59.317 74.3857 58.7154 73.6366 58.1376V17.1511L60.0159 13.6762V45.6153C59.5006 45.1047 57.9656 44.6298 57.4622 44.1073C53.4632 39.7815 49.4405 34.8462 48.1762 26.5943C46.8326 17.8002 48.513 10.7316 53.0471 6.16045Z\" fill=\"#B3B3B3\"/>\n    <path d=\"M52.6193 8.37803C54.941 6.0345 59.0376 3.24268 65.4049 3.24268H65.6163C75.4861 3.9461 78.9923 9.66096 81.9736 15.9553C82.1158 16.2724 82.4328 16.4765 82.7827 16.4765C83.1326 16.4765 83.4534 16.2724 83.5991 15.9553C86.4821 9.66096 90.7974 3.24268 100.893 3.24268H101.141C109.163 3.75658 115.024 8.39261 117.17 15.9553C119.514 24.196 116.62 33.3806 112.709 38.8367C109.323 43.5529 104.622 47.5912 100.073 51.4947C99.3223 52.1361 98.5861 52.774 97.8535 53.4045C95.0653 55.8318 92.7546 57.5157 90.3054 59.3089C88.155 60.8797 85.7349 62.6438 82.6734 65.1477C80.0529 62.7968 76.9221 60.3877 73.6236 57.8473C72.9494 57.3298 72.2423 56.7758 71.5535 56.2437V18.4993L58.1082 15.2993V44.7119C57.6344 44.2417 57.1424 43.8044 56.6795 43.3233C53.002 39.3396 49.3027 34.7947 48.14 27.1955C46.9045 19.0971 48.4498 12.5876 52.6193 8.37803Z\" fill=\"#2C2C2C\"/>"
  },
  {
    "selector": "app-open-request-card",
    "className": "OpenRequestCardComponent",
    "path": "pages/open-requests/components/open-request-card/open-request-card.component.ts",
    "inputs": [],
    "snippet": "<div class=\"open-request-card_header\">\n  <div class=\"open-request-card_skill\">\n    <app-expertise-title-card\n      [openRequest]=\"openRequestConversation()\"\n    >\n      <img"
  },
  {
    "selector": "app-open-requests",
    "className": "OpenRequestsComponent",
    "path": "pages/open-requests/components/_open-requests/open-requests.component.ts",
    "inputs": [],
    "snippet": "<div class=\"page-content\">\n  <div class=\"open-request\">\n    <div class=\"open-request_header-menu\">\n      <app-main-content-menu\n        [menuItems]=\"menuItems\"\n        (changeSelectedItem)=\"selectedMenuItem.set($event)\""
  },
  {
    "selector": "app-org-accordion",
    "className": "OrgAccordionComponent",
    "path": "pages/admin/org-requests/org-accordion/org-accordion.component.ts",
    "inputs": [],
    "snippet": "<div class=\"accordion-card\" [class]=\"'idx' + org().id\">\n  <input\n    type=\"checkbox\"\n    [id]=\"org().id\"\n    (click)=\"toggle($event)\"\n    [checked]=\"accordionInpIsChecked()\""
  },
  {
    "selector": "app-org-form",
    "className": "OrgFormComponent",
    "path": "pages/usersettings/components/org-form/org-form.component.ts",
    "inputs": [],
    "snippet": "@if (form()) {\n  <form [formGroup]=\"form()\" class=\"form\">\n    <div class=\"form__group\">\n      <div class=\"form__group--left\">\n        <h2 class=\"form-label\">\n          {{ formData()?.uploadAvatarLabel | translate }}"
  },
  {
    "selector": "app-org-form-item",
    "className": "OrgFormItemComponent",
    "path": "pages/usersettings/components/org-form-item/org-form-item.component.ts",
    "inputs": [],
    "snippet": "<div class=\"org-form-item\">\n  @if (form) {\n    <form [formGroup]=\"form\" class=\"form\">\n      <div class=\"form__group-container\">\n        <div class=\"form__group-row\">\n          @if (isAddMode && !showAddPartnerForm) {"
  },
  {
    "selector": "app-org-information",
    "className": "OrgInformationComponent",
    "path": "pages/usersettings/sections/org-information/org-information.component.ts",
    "inputs": [],
    "snippet": "@if (organization()) {\n  <div class=\"landing-page-wraper\">\n    <app-section-header [title]=\"'organization_landing_page_title' | translate\">\n      <app-landing-page-icon></app-landing-page-icon>\n    </app-section-header>\n    <app-landing-form"
  },
  {
    "selector": "app-org-requests",
    "className": "OrgRequestsComponent",
    "path": "pages/admin/org-requests/org-requests.component.ts",
    "inputs": [],
    "snippet": "<div class=\"org-requests-container\">\n  <app-section-header [title]=\"'Org requests'\">\n    <app-organization-icon></app-organization-icon>\n  </app-section-header>\n\n  <div>"
  },
  {
    "selector": "app-org-skill-item",
    "className": "OrgSkillItemComponent",
    "path": "pages/usersettings/components/org-skills/org-skill-item/org-skill-item.component.ts",
    "inputs": [],
    "snippet": "<form class=\"skillset-item\" [formGroup]=\"form\">\n  @if (isAddMode()) {\n    <app-button-icon-oval\n      (click)=\"onSave()\"\n      [disabled]=\"form.invalid || disabled()\"\n      [isActive]=\"!form.invalid\""
  },
  {
    "selector": "app-org-skills",
    "className": "OrgSkillsComponent",
    "path": "pages/usersettings/components/org-skills/org-skills.component.ts",
    "inputs": [],
    "snippet": "<div class=\"org-skills\">\n  <app-section-header title=\"{{ 'org_skills' | translate }}\">\n    <app-topics-icon></app-topics-icon>\n  </app-section-header>\n\n  <div class=\"org-skills_wrapper\">"
  },
  {
    "selector": "app-organization-adjustments",
    "className": "OrganizationAdjustmentsComponent",
    "path": "pages/usersettings/components/organization-adjustments/organization-adjustments.component.ts",
    "inputs": [],
    "snippet": "<app-section-header [title]=\"'organization_adjustments_title' | translate\">\n  <app-topics-icon></app-topics-icon>\n</app-section-header>\n\n<div class=\"organization_adjustments\">\n  @if (form) {"
  },
  {
    "selector": "app-organization-icon",
    "className": "OrganizationIconComponent",
    "path": "shared/icons/organization-icon/organization-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  viewBox=\"0 0 90 91\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n>\n  <path"
  },
  {
    "selector": "app-organization-profile",
    "className": "OrganizationProfileComponent",
    "path": "pages/organizations/organization-profile/organization-profile.component.ts",
    "inputs": [
      "organizationName"
    ],
    "snippet": "<div class=\"organization\">\n  @if (isLoading()) {\n    <div class=\"organization__loading\">\n      <app-small-spinner diameter=\"26\"></app-small-spinner>\n    </div>\n  } @else {"
  },
  {
    "selector": "app-organizations",
    "className": "OrganizationsComponent",
    "path": "pages/profile/components/_child/organizations/organizations.component.ts",
    "inputs": [],
    "snippet": "<p>organizations works!</p>"
  },
  {
    "selector": "app-owner-ice-breaker-btn",
    "className": "OwnerIceBreakerBtnComponent",
    "path": "ice-breaker/modules/ice-breakers-list-old/ice-breaker-card-module/components/ice-breaker-card/owner-ice-breaker-btn/owner-ice-breaker-btn/owner-ice-breaker-btn.component.ts",
    "inputs": [],
    "snippet": "<section class=\"wrapper\">\n  <ng-container\n    *ngIf=\"\n      iceBreaker.icebreaker_type === ICE_BREAKER_TYPES.I_WILL_PAY;\n      else regular\n    \""
  },
  {
    "selector": "app-page-not-found",
    "className": "PageNotFoundComponent",
    "path": "pages/page-not-found/page-not-found.component.ts",
    "inputs": [],
    "snippet": "<div class=\"page-404\">\n  <h2 class=\"page-404__title\">Page not found!</h2>\n</div>"
  },
  {
    "selector": "app-parentcategories",
    "className": "ParentcategoriesComponent",
    "path": "pages/admin/parentcategories/parentcategories.component.ts",
    "inputs": [],
    "snippet": "<div class=\"parentcategories\">\n  <div class=\"parentcategories__list\">\n    <h2 (click)=\"onCreateRequest()\" class=\"add-new\">+</h2>\n    <app-small-spinner\n      [diameter]=\"30\"\n      *ngIf=\"!parentCategories\""
  },
  {
    "selector": "app-partners-card",
    "className": "PartnersCardComponent",
    "path": "pages/organizations/components/partners-card/partners-card.component.ts",
    "inputs": [],
    "snippet": "<div class=\"partner-card\">\n  <div class=\"partner-card__image\" [style.background-image]=\"'url(' + partner().image + ')'\"></div>\n  <div class=\"partner-card__name\">{{partner().name}}</div>\n  <div class=\"partner-card__description\">{{partner().description}}</div>\n</div>"
  },
  {
    "selector": "app-payment-counter",
    "className": "PaymentCounterComponent",
    "path": "shared/components/payment-counter/payment-counter.component.ts",
    "inputs": [],
    "snippet": "<div\n  class=\"payment-counter\"\n  [ngClass]=\"{\n    'payment-counter--student':\n      advisorId !== user.id && !isFeedback && !isOwnerOfIceBreaker,\n    'payment-counter--feedback': isFeedback,"
  },
  {
    "selector": "app-payment-modal",
    "className": "PaymentModalComponent",
    "path": "ice-breaker/modules/ice-breaker-template/components/payment-modal/payment-modal.component.ts",
    "inputs": [],
    "snippet": "<section matDialogContent>\n  <button class=\"close-modal-btn close-btn\" (click)=\"close(undefined)\">\n    <img src=\"assets/close-modal-icon.svg\" alt=\"Close modal icon\" />\n  </button>\n  <ng-container *ngIf=\"paymentMethods\">\n    <ng-container *ngIf=\"paymentMethods.data.length; else enterCardTpl\">"
  },
  {
    "selector": "app-payment-slider",
    "className": "PaymentSliderComponent",
    "path": "shared/components/payment-slider/payment-slider.component.ts",
    "inputs": [],
    "snippet": "<div class=\"custom-slider\" *ngIf=\"show$ | async\">\n  <ngx-slider\n    (valueChange)=\"didChange($event)\"\n    [value]=\"inputValue\"\n    [options]=\"options\"\n  ></ngx-slider>"
  },
  {
    "selector": "app-payments-manual-payouts",
    "className": "PaymentsManualPayoutsComponent",
    "path": "pages/usersettings/components/finances-stripe/payments-manual-payouts/payments-manual-payouts.component.ts",
    "inputs": [],
    "snippet": "<div class=\"manual\">\n  <div class=\"payments-header\">\n    <h2 class=\"payments-header-title\">\n      {{\n        'finances_stripe.manual_payouts'\n          | translate: { secure: connect() ? '' : ' (less secure)' }"
  },
  {
    "selector": "app-payments-not-supported",
    "className": "PaymentsNotSupportedComponent",
    "path": "pages/usersettings/components/finances-stripe/payments-not-supported/payments-not-supported.component.ts",
    "inputs": [],
    "snippet": "<div class=\"payments-not-support\">\n  <div class=\"payments-not-support-text\">\n    <p>{{ 'finances_stripe.not_support_text.paragraph_1' | translate }}</p>\n    <p>{{ 'finances_stripe.not_support_text.paragraph_2' | translate }}</p>\n    <p class=\"payments-not-support-down\">\n      {{ 'finances_stripe.not_support_text.paragraph_3' | translate }}"
  },
  {
    "selector": "app-payments-paying",
    "className": "PaymentsPayingComponent",
    "path": "pages/usersettings/components/finances-stripe/payments-paying/payments-paying.component.ts",
    "inputs": [],
    "snippet": "<div class=\"payments payments-paying\">\n  <div class=\"payments-header\">\n    <h2 class=\"payments-header-title payments-header-title-paying\">\n      {{\n        (connect()\n          ? 'finances_stripe.your_payment_accounts'"
  },
  {
    "selector": "app-payments-saving",
    "className": "PaymentsSavingComponent",
    "path": "pages/usersettings/components/finances-stripe/payments-saving/payments-saving.component.ts",
    "inputs": [],
    "snippet": "<div class=\"payments payments-save\">\n  <h2>{{ 'finances_stripe.save_money' | translate }}</h2>\n  <div class=\"payments-save-block\">\n    <div class=\"commission\">\n      <div class=\"block\">\n        <p class=\"commission-percent\">30%</p>"
  },
  {
    "selector": "app-payout-modal",
    "className": "PayoutModalComponent",
    "path": "pages/admin/payouts/payout-modal/payout-modal.component.ts",
    "inputs": [],
    "snippet": "<div class=\"payout-modal\">\n  <table matTable>\n    <table mat-table [dataSource]=\"dataSource\">\n      <ng-container matColumnDef=\"comment\">\n        <th mat-header-cell *matHeaderCellDef>Comment</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.comment }}</td>"
  },
  {
    "selector": "app-payout-request",
    "className": "PayoutRequestComponent",
    "path": "pages/usersettings/components/finances-stripe/payout-request/payout-request.component.ts",
    "inputs": [],
    "snippet": "<div class=\"payout-request\">\n  <div class=\"payout-request__btns\">\n    @if (mode === 'new' || mode === 'edit') {\n      <ng-container>\n        <button\n          class=\"payout-request__btn\""
  },
  {
    "selector": "app-payout-request-modal",
    "className": "PayoutRequestModalComponent",
    "path": "pages/usersettings/components/finances-stripe/payout-request-modal/payout-request-modal.component.ts",
    "inputs": [],
    "snippet": "@if (init) {\n  <app-payout-request\n    [requestIn]=\"request\"\n    [mode]=\"mode\"\n    [amount]=\"amount\"\n    [dateCreated]=\"date\""
  },
  {
    "selector": "app-payouts",
    "className": "PayoutsComponent",
    "path": "pages/admin/payouts/payouts.component.ts",
    "inputs": [],
    "snippet": "<div class=\"payouts\">\n  <table\n    mat-table\n    matSort\n    [dataSource]=\"dataSource\"\n    multiTemplateDataRows"
  },
  {
    "selector": "app-pdf-presentation",
    "className": "PdfPresentationComponent",
    "path": "shared/components/pdf/pdf-presentation/pdf-presentation.component.ts",
    "inputs": [],
    "snippet": "<div class=\"pdf\" [ngClass]=\"{ 'pdf--center': !loaded }\">\n  <app-load-pdf-btn (clicked)=\"load()\" *ngIf=\"!loaded\"></app-load-pdf-btn>\n\n  <div class=\"pdf__viewr\">\n    <pdf-viewer\n      *ngIf=\"loaded\""
  },
  {
    "selector": "app-permission-list",
    "className": "PermissionListComponent",
    "path": "pages/usersettings/components/permission-list/permission-list.component.ts",
    "inputs": [],
    "snippet": "<div class=\"permissions\">\n  @for (permission of permissions(); track permission.name) {\n    <div class=\"permission\">\n      <div class=\"permission_header\">\n        <h5 class=\"title\">{{ permission.name }}</h5>\n        <label class=\"switch\">"
  },
  {
    "selector": "app-pill-icon",
    "className": "PillIconComponent",
    "path": "shared/icons/pill-icon/pill-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  width=\"24\"\n  height=\"25\"\n  viewBox=\"0 0 24 25\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\""
  },
  {
    "selector": "app-play-circle-icon",
    "className": "PlayCircleIconComponent",
    "path": "shared/icons/play-circle-icon/play-circle-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"31\" height=\"31\" viewBox=\"0 0 31 31\" fill=\"none\">\n  <path d=\"M15.3024 28.0597C22.1215 28.0597 27.6495 22.5317 27.6495 15.7126C27.6495 8.89348 22.1215 3.36548 15.3024 3.36548C8.48326 3.36548 2.95526 8.89348 2.95526 15.7126C2.95526 22.5317 8.48326 28.0597 15.3024 28.0597Z\" stroke=\"#1E1E1E\" stroke-width=\"1.85207\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <path d=\"M12.833 10.7738L20.2412 15.7126L12.833 20.6515V10.7738Z\" stroke=\"#1E1E1E\" stroke-width=\"1.85207\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-please-login-modal",
    "className": "PleaseLoginModalComponent",
    "path": "pages/rateflow/please-login-modal/please-login-modal.component.ts",
    "inputs": [],
    "snippet": "<div class=\"modal-header\">\n  <app-close-icon (click)=\"close()\"></app-close-icon>\n</div>\n<h2 class=\"modal-title\" mat-dialog-title>{{ 'please-login-modal.title' | translate }}</h2>\n<mat-dialog-content>\n  <p class=\"modal-text\">{{ 'please-login-modal.text' | translate }}</p>"
  },
  {
    "selector": "app-plus-icon",
    "className": "PlusIconComponent",
    "path": "shared/icons/plus-icon/plus-icon.component.ts",
    "inputs": [],
    "snippet": ""
  },
  {
    "selector": "app-policy",
    "className": "PolicyComponent",
    "path": "pages/policy/policy.component.ts",
    "inputs": [],
    "snippet": "<div class=\"container policy\">\n  <div [innerHTML]=\"htmlLangBasedLoadService.htmlContent\"></div>\n</div>"
  },
  {
    "selector": "app-pqa-card",
    "className": "PqaCardComponent",
    "path": "pages/my-projects/pqa-card/pqa-card.component.ts",
    "inputs": [],
    "snippet": "<div class=\"pqa-card\" #cardRef *ngIf=\"project\">\n  <div>\n    <h2 class=\"pqa-card__header\">{{ project.title || 'Untitled' }}</h2>\n\n    <div class=\"pqa-card__gallery-area\">\n      <app-presentation-slider"
  },
  {
    "selector": "app-presentation-slider",
    "className": "PresentationSliderComponent",
    "path": "shared/components/presentation-slider/presentation-slider.component.ts",
    "inputs": [],
    "snippet": "<div class=\"presentation-container\" #containerRef>\n  <div\n    class=\"slider-presentation-nav\"\n    [ngClass]=\"{ 'slider-presentation-nav--big': isRateflowPresentation }\"\n    #sliderNavRef\n  >"
  },
  {
    "selector": "app-presenter-question-item",
    "className": "PresenterQuestionItemComponent",
    "path": "pages/upload/project-edit/presenter-question-item/presenter-question-item.component.ts",
    "inputs": [],
    "snippet": "<div *ngIf=\"!presenterQuestion._destroy\" class=\"presenter-question-item\">\n  <button\n    *ngIf=\"length > 1 && presenterQuestion.title\"\n    class=\"presenter-question-item__action-button\"\n    type=\"button\"\n    (click)=\"onQuestionAction()\""
  },
  {
    "selector": "app-presenter-questions-pane",
    "className": "PresenterQuestionsPaneComponent",
    "path": "pages/rateflow/flexfeedback/presenter-questions-pane/presenter-questions-pane.component.ts",
    "inputs": [],
    "snippet": "<div class=\"presenter-questions-pane\">\n  <h1>{{ 'presenter-questions.title' | translate }}</h1>\n  <h2>{{ 'presenter-questions.subtitle' | translate }}</h2>\n\n  <ng-container *ngIf=\"author\">\n    <app-presenter-questions-pane-item"
  },
  {
    "selector": "app-presenter-questions-pane-item",
    "className": "PresenterQuestionsPaneItemComponent",
    "path": "pages/rateflow/flexfeedback/presenter-questions-pane/presenter-questions-pane-item/presenter-questions-pane-item.component.ts",
    "inputs": [],
    "snippet": "<div class=\"presenter-question\">\n  <div class=\"presenter-question__container\">\n    <p class=\"presenter-question__message\">{{ question.title }}</p>\n    <app-user-info\n      *ngIf=\"author\"\n      [isRound]=\"true\""
  },
  {
    "selector": "app-preview-iframe-modal",
    "className": "PreviewIframeModalComponent",
    "path": "shared/components/iframe/preview-iframe-modal/preview-iframe-modal.component.ts",
    "inputs": [],
    "snippet": "<a mat-dialog-close class=\"close\">\n  <img src=\"assets/close-modal-icon.svg\" alt=\"close-modal-icon\" />\n</a>\n\n<div class=\"iframe-container\" [innerHTML]=\"iframeSrc\" *ngIf=\"iframeSrc\"></div>"
  },
  {
    "selector": "app-preview-pdf-modal",
    "className": "PreviewPdfModalComponent",
    "path": "shared/components/pdf/preview-pdf-modal/preview-pdf-modal.component.ts",
    "inputs": [],
    "snippet": "<div #containerRef class=\"modal-pdf\">\n  <a mat-dialog-close class=\"close\">\n    <img src=\"assets/close-modal-icon.svg\" alt=\"close-modal-icon\" />\n  </a>\n\n  <div class=\"pdf-container\">"
  },
  {
    "selector": "app-price-conditions",
    "className": "PriceConditionsComponent",
    "path": "ice-breaker/modules/ice-breaker-template/components/price-conditions/price-conditions/price-conditions.component.ts",
    "inputs": [],
    "snippet": "<section class=\"price-conditions-container\">\n  <ng-container\n    *ngIf=\"\n      iceBreakerType === ICE_BREAKER_TYPES.I_WILL_PAY;\n      else setPriceOfIceBreakerTmpl\n    \""
  },
  {
    "selector": "app-price-control-slider",
    "className": "PriceControlSliderComponent",
    "path": "shared/components/price-control-slider/price-control-slider/price-control-slider.component.ts",
    "inputs": [],
    "snippet": "<div class=\"slider-container\">\n  <button class=\"slide-btn\" (click)=\"down()\">\n    <mat-icon>chevron_left</mat-icon>\n  </button>\n  <nouislider\n    [config]=\"sliderConfig\""
  },
  {
    "selector": "app-price-slider",
    "className": "PriceSliderComponent",
    "path": "pages/conversation/price-slider/price-slider.component.ts",
    "inputs": [],
    "snippet": "<div\n  class=\"price-slider__container\"\n  [ngClass]=\"{\n    'slider-opened-bottom': showSlider && placement === 'bottom',\n    'slider-opened-top': showSlider && placement === 'top',\n  }\""
  },
  {
    "selector": "app-profile",
    "className": "ProfileComponent",
    "path": "pages/profile/components/_profile/profile.component.ts",
    "inputs": [
      "profileToken"
    ],
    "snippet": "@if (isLoading()) {\n  <app-icon-spinner></app-icon-spinner>\n} @else if (publicProfile()) {\n  <app-profile-image\n    class=\"profile_image\"\n  ></app-profile-image>"
  },
  {
    "selector": "app-profile-icebreakers-list",
    "className": "ProfileIcebreakersListComponent",
    "path": "pages/profile/components/_child/ice-breakers-list/profile-icebreakers-list.component.ts",
    "inputs": [
      "capsuleId"
    ],
    "snippet": "<div class=\"ice-breakers-container\">\n    @if (isProfileOwner() && selectedUserProfileSkill()) {\n      <app-ice-breakers-list-card\n        [isOwner]=\"isProfileOwner()\"\n        [userSkill]=\"selectedUserProfileSkill()\"\n      ></app-ice-breakers-list-card>"
  },
  {
    "selector": "app-profile-image",
    "className": "ProfileImageComponent",
    "path": "pages/profile/components/profile-image/profile-image.component.ts",
    "inputs": [],
    "snippet": "<app-cover-image\n  [image]=\"userProfileImage()\"\n></app-cover-image>\n\n@if (isProfileOfCurrentUser()) {\n  <app-button"
  },
  {
    "selector": "app-profile-info-card",
    "className": "ProfileInfoCardComponent",
    "path": "pages/profile/components/profile-info/_profile-info-card/profile-info-card.component.ts",
    "inputs": [],
    "snippet": "<app-profile-info-card-title\n  [profile]=\"userProfile()\"\n></app-profile-info-card-title>\n\n\n<app-horizontal-line"
  },
  {
    "selector": "app-profile-info-card-title",
    "className": "ProfileInfoCardTitleComponent",
    "path": "pages/profile/components/profile-info/profile-info-card-title/profile-info-card-title.component.ts",
    "inputs": [
      "profile"
    ],
    "snippet": "<app-conversation-image\n  [images]=\"images()\"\n></app-conversation-image>\n\n<div class=\"card-title\">\n  <div class=\"card-title_name\">"
  },
  {
    "selector": "app-profile-info-languages",
    "className": "ProfileInfoLanguagesComponent",
    "path": "pages/profile/components/profile-info/profile-info-languages/profile-info-languages.component.ts",
    "inputs": [],
    "snippet": "<app-segment-title\n  title=\"languages.title\"\n></app-segment-title>\n\n<div class=\"languages-list\">\n  @for (language of languages(); track language.name) {"
  },
  {
    "selector": "app-profile-navigation",
    "className": "ProfileNavigationComponent",
    "path": "pages/profile/components/profile-navigation/profile-navigation.component.ts",
    "inputs": [],
    "snippet": "@for (navButton of navigationItems(); track navButton.title) {\n  <app-button-navigation-item\n    [navigationItem]=\"navButton\"\n  ></app-button-navigation-item>\n}"
  },
  {
    "selector": "app-profile-topics-expertise",
    "className": "ProfileTopicsExpertiseComponent",
    "path": "pages/profile/components/profile-info/profile-topics-expertise/profile-topics-expertise.component.ts",
    "inputs": [],
    "snippet": "<app-segment-title\n  title=\"profile-topics-expertise.title\"\n></app-segment-title>\n\n<app-skills-button-list\n  class=\"skills-button-list\""
  },
  {
    "selector": "app-project-card",
    "className": "ProjectCardComponent",
    "path": "pages/my-projects/project-card/project-card.component.ts",
    "inputs": [],
    "snippet": "<div class=\"project-card-placeholder\" *ngIf=\"isUploadPlaceholder\">\n  <img src=\"assets/upload/upload-new.svg\" alt=\"\" />\n  <div class=\"project-card-placeholder__upload-cta\">\n    <button class=\"greytme-button btn\" routerLink=\"/upload\">\n      <img src=\"assets/header/upload.svg\" alt=\"upload-project-icon\" />\n      <h3>Upload new project</h3>"
  },
  {
    "selector": "app-project-card-v2",
    "className": "ProjectCardV2Component",
    "path": "shared/components/project-card-v2/project-card-v2.component.ts",
    "inputs": [],
    "snippet": "<div class=\"card\" *ngIf=\"project\" #cardRef>\n  <div\n    class=\"card__header-mini\"\n    [ngClass]=\"{\n      'card__header-mini--columns': isPublicProfileProject && isAuthor,\n    }\""
  },
  {
    "selector": "app-project-edit",
    "className": "ErrorDialogComponent",
    "path": "pages/upload/project-edit/project-edit.component.ts",
    "inputs": [],
    "snippet": "<div mat-dialog-content style=\"font-size: 3rem; padding: 2rem; flex: 1\">\n  {{ data.formError }}\n</div>\n<br />\n<div mat-dialog-actions style=\"text-align: right\">\n  <button mat-button (click)=\"onNoClick()\" class=\"btn btn-primary\">"
  },
  {
    "selector": "app-project-info-card-single",
    "className": "ProjectInfoCardSingleComponent",
    "path": "shared/components/project-info-cards/project-info-card-single/project-info-card-single.component.ts",
    "inputs": [],
    "snippet": "<div\n  class=\"project-info-card-single\"\n  [class]=\"'project-info-card-single-' + projectInfoCard.cardType\"\n  [ngClass]=\"{\n    'px-0': projectInfoCard.cardType === cardTypes.feedback_focus_card,\n    'project-info-card-single--small': isSmall,"
  },
  {
    "selector": "app-project-info-cards",
    "className": "ProjectInfoCardsComponent",
    "path": "shared/components/project-info-cards/project-info-cards.component.ts",
    "inputs": [],
    "snippet": "<div class=\"cards-container\">\n  <div\n    class=\"project-info-cards\"\n    [ngClass]=\"{ 'project-info-cards--small': isSmall }\"\n  >\n    <app-project-info-card-single"
  },
  {
    "selector": "app-project-menu-top",
    "className": "ProjectMenuTopComponent",
    "path": "pages/transactions/project-menu-top/project-menu-top.component.ts",
    "inputs": [],
    "snippet": "<div class=\"project-menu-top project-menu__white\">\n  <a\n    (click)=\"onPrev()\"\n    class=\"nav-arrow nav-arrow__left {{\n      activeItem == menuItems[0] ? 'nav-arrow__hidden' : ''\n    }}\""
  },
  {
    "selector": "app-project-share-dialog",
    "className": "ProjectShareDialogComponent",
    "path": "pages/my-projects/project-share-dialog/project-share-dialog.component.ts",
    "inputs": [],
    "snippet": "<div class=\"project-share-dialog\">\n  <div class=\"project-share-dialog__header\">\n    <h1 mat-dialog-title>\n      <ng-container *ngIf=\"data.isEdit\">Share updated project</ng-container>\n      <ng-container *ngIf=\"!data.isEdit\">Share uploaded project</ng-container>\n    </h1>"
  },
  {
    "selector": "app-projects",
    "className": "ProjectsComponent",
    "path": "pages/admin/projects/projects.component.ts",
    "inputs": [],
    "snippet": "<div class=\"projects\">\n  <table\n    mat-table\n    matSort\n    [dataSource]=\"dataSource\"\n    multiTemplateDataRows"
  },
  {
    "selector": "app-property-counter",
    "className": "PropertyCounterComponent",
    "path": "ice-breaker/modules/ice-breaker-template/components/price-conditions/price-conditions/components/property-counter/property-counter.component.ts",
    "inputs": [],
    "snippet": "<section\n  class=\"price-per-person-container\"\n  [ngClass]=\"{ 'price-per-person-container__active': !isDisabled }\"\n>\n  <ng-container *ngIf=\"!isDisplaySlider; else sliderControl\">\n    <ng-content select=\"[icon]\"> </ng-content>"
  },
  {
    "selector": "app-public-visibility",
    "className": "PublicVisibilityComponent",
    "path": "pages/usersettings/sections/public-visibility/public-visibility.component.ts",
    "inputs": [],
    "snippet": "<app-section-header [title]=\"'visibility_title' | translate\">\n  <app-bell-icon></app-bell-icon>\n</app-section-header>\n\n<app-permission-list [permissions]=\"permissions\"></app-permission-list>"
  },
  {
    "selector": "app-queue-icon",
    "className": "QueueIconComponent",
    "path": "shared/icons/queue-icon/queue-icon.component.ts",
    "inputs": [],
    "snippet": ""
  },
  {
    "selector": "app-queued-by",
    "className": "QueuedByComponent",
    "path": "pages/open-requests/components/queued-by/queued-by.component.ts",
    "inputs": [
      "openRequestConversation"
    ],
    "snippet": "<div class=\"queued-by_icon-container\">\n  <app-queue-icon></app-queue-icon>\n  <span class=\"queued-by_icon-text\">{{ 'queued_by.queued_by' | translate }}</span>\n</div>\n<app-icon-arrow direction=\"right\" color=\"#757575\" strokeWidth=\"2.5\"></app-icon-arrow>\n<div class=\"queued-by_images-container\">"
  },
  {
    "selector": "app-radio",
    "className": "RadioComponent",
    "path": "shared/radio/radio.component.ts",
    "inputs": [
      "label",
      "inputName",
      "type",
      "description",
      "indeterminate"
    ],
    "snippet": "<div class=\"input-wrapper\" [ngClass]=\"{\n    disabled: isDisabled(),\n    checkbox: type() === 'checkbox',\n    radio: type() === 'radio',\n    'is-indeterminate': isIndeterminateClass\n  }\">"
  },
  {
    "selector": "app-rate-currency",
    "className": "RateCurrencyComponent",
    "path": "pages/usersettings/components/rate-currency/rate-currency.component.ts",
    "inputs": [],
    "snippet": "<form class=\"block-rate-currency\" [formGroup]=\"form\">\n  <div class=\"inp\">\n    <app-input\n      [control]=\"form.get('rate')\"\n      inputName=\"rate\"\n      type=\"number\""
  },
  {
    "selector": "app-rateback-selector",
    "className": "RatebackSelectorComponent",
    "path": "shared/components/rateback-selector/rateback-selector.component.ts",
    "inputs": [],
    "snippet": "<div\n  class=\"ratebacks\"\n  [ngClass]=\"{ 'ratebacks--small': isSmall, 'ratebacks--big': isBig }\"\n>\n  <a\n    class=\"ratebacks__item\""
  },
  {
    "selector": "app-rateback-summary-card",
    "className": "RatebackSummaryCardComponent",
    "path": "pages/insights/rateback-summary-card/rateback-summary-card.component.ts",
    "inputs": [],
    "snippet": "<!-- first slide - waiting for ratebacks -->\n<div class=\"rateback-summary-card\" *ngIf=\"slide === 1\">\n  <div class=\"rateback-summary-card__container\">\n    <p class=\"rateback-summary-card__text-top\">Collecting your feedback</p>\n    <div class=\"rateback-summary-card__img\">\n      <img src=\"/assets/rateback-summary/collecting.svg\" alt=\"\" />"
  },
  {
    "selector": "app-rateflow",
    "className": "RateflowComponent",
    "path": "pages/rateflow/rateflow.component.ts",
    "inputs": [],
    "snippet": "<div class=\"rateflow__no-projects\" *ngIf=\"noprojects\">\n  <h2>There are no new projects for now</h2>\n  <p>You rated all projects, come back later</p>\n</div>\n\n<ng-container *ngIf=\"!noprojects\">"
  },
  {
    "selector": "app-receipt",
    "className": "ReceiptComponent",
    "path": "shared/components/receipt/receipt.component.ts",
    "inputs": [],
    "snippet": "<ng-content select=\"[description]\"> </ng-content>\n<div class=\"receipt-container\">\n  <div\n    class=\"receipt\"\n    [ngClass]=\"{\n      'receipt--feedback': isFeedbackSession,"
  },
  {
    "selector": "app-recommend-or-share-profile",
    "className": "RecommendOrShareProfileComponent",
    "path": "pages/profile/components/profile-info/recomend-or-share-profile/recommend-or-share-profile.component.ts",
    "inputs": [],
    "snippet": "<app-button\n  btnUIType=\"subtle\"\n  size=\"small\"\n  [ngClass]=\"{'invert-colors': isAlreadyRecommended()}\"\n  [disabled]=\"!userIsSignedIn() || isProfileOfCurrentUser()\"\n  (click)=\"recommend()\""
  },
  {
    "selector": "app-relations",
    "className": "RelationsComponent",
    "path": "pages/admin/relations/relations.component.ts",
    "inputs": [],
    "snippet": "<br />\n<br />\n<br />\n<app-small-spinner [diameter]=\"50\" *ngIf=\"isLoading\"></app-small-spinner>\n\n<div class=\"relations\" *ngIf=\"artfields && loadedRelations && !isLoading\">"
  },
  {
    "selector": "app-relations-performance",
    "className": "RelationsPerformanceComponent",
    "path": "pages/admin/nextwork/relations-performance/relations-performance.component.ts",
    "inputs": [],
    "snippet": "<div class=\"relations\">\n  <table\n    mat-table\n    matSort\n    [dataSource]=\"dataSource\"\n    multiTemplateDataRows"
  },
  {
    "selector": "app-reorder-icon",
    "className": "ReorderIconComponent",
    "path": "shared/icons/reorder-icon/reorder-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 21 21\" fill=\"none\">\n<path\n    d=\"M3.00051 7.25112H17.9993C18.4579 7.25112 18.8329 6.87296 18.8329 6.4105C18.8329 5.94805 18.4579 5.56989 17.9993 5.56989H11.3335V3.58694H13.1333C13.2833 3.58694 13.3583 3.4018 13.2497 3.30096L10.6163 0.645194C10.5499 0.57823 10.4499 0.57823 10.3827 0.645194L7.74934 3.30096C7.64076 3.41046 7.71575 3.58694 7.86574 3.58694H9.6656V5.56989L3.00053 5.57068C2.54196 5.57068 2.16699 5.94883 2.16699 6.41129C2.16699 6.87375 2.54196 7.25191 3.00053 7.25191L3.00051 7.25112Z\"\n    fill=\"black\"\n  />\n  <path"
  },
  {
    "selector": "app-request-icon",
    "className": "RequestIconComponent",
    "path": "shared/icons/request-icon/request-icon.component.ts",
    "inputs": [],
    "snippet": "<svg viewBox=\"0 0 17 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M14.9045 11.679C14.9045 13.5928 11.6418 13.3507 11.6418 13.3507C11.6418 13.3507 8.37906 13.5928 8.37906 11.679C8.37906 9.76516 9.84324 8.20874 11.6418 8.20874C13.4403 8.20874 14.9045 9.76516 14.9045 11.679Z\"\n        [attr.fill]=\"fill()\"/>\n  <path d=\"M11.6423 7.51684C12.7566 7.51684 13.6599 6.61354 13.6599 5.49927C13.6599 4.38499 12.7566 3.48169 11.6423 3.48169C10.5281 3.48169 9.62476 4.38499 9.62476 5.49927C9.62476 6.61354 10.5281 7.51684 11.6423 7.51684Z\"\n        [attr.fill]=\"fill()\"/>\n  <path d=\"M5.8883 7.62082H4.85069V6.58321C4.85069 6.07593 4.43564 5.66089 3.92836 5.66089C3.42109 5.66089 3.00604 6.07593 3.00604 6.58321V7.62082H1.96843C1.46116 7.62082 1.04611 8.03586 1.04611 8.54314C1.04611 9.05042 1.46116 9.46546 1.96843 9.46546H3.00604V10.5031C3.00604 11.0103 3.42109 11.4254 3.92836 11.4254C4.43564 11.4254 4.85069 11.0103 4.85069 10.5031V9.46546H5.8883C6.39557 9.46546 6.81062 9.05042 6.81062 8.54314C6.81062 8.03586 6.39557 7.62082 5.8883 7.62082Z\""
  },
  {
    "selector": "app-requests-icon",
    "className": "RequestsIconComponent",
    "path": "shared/icons/requests-icon/requests-icon.component.ts",
    "inputs": [
      "color",
      "isActive"
    ],
    "snippet": ""
  },
  {
    "selector": "app-resort-presentation",
    "className": "ResortPresentationComponent",
    "path": "pages/rateflow/resort-presentation/resort-presentation.component.ts",
    "inputs": [],
    "snippet": "<div class=\"resort\">\n  <div class=\"resort__title\">\n    <button (click)=\"closeResort.emit()\">\n      <img src=\"assets/conversation-back@2x.png\" class=\"chat__header--back\" />\n      Close resort\n    </button>"
  },
  {
    "selector": "app-review-score",
    "className": "ReviewScoreComponent",
    "path": "shared/complex-ui-components/review-score/review-score.component.ts",
    "inputs": [
      "score",
      "maxScore",
      "totalReviews",
      "allowPositiveReview",
      "allowNegativeReview"
    ],
    "snippet": "<div class=\"review-score_actions-container\">\n\n  <div class=\"review-score_actions-arrows\">\n    <app-arrow-left-circle-icon\n      [color]=\"allowNegativeReview() ? arrowDefaultColor : arrowActiveColor \"\n      [hoverColor]=\"allowNegativeReview() ? arrowActiveColor : null\""
  },
  {
    "selector": "app-right-arrow-icon",
    "className": "RightArrowIconComponent",
    "path": "shared/icons/right-arrow-icon/right-arrow-icon.component.ts",
    "inputs": [],
    "snippet": "<svg viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M18 36L30 24L18 12\" [attr.stroke]=\"color()\"\n        [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-role-description",
    "className": "RoleDescriptionComponent",
    "path": "pages/profile/components/profile-info/role-description/role-description.component.ts",
    "inputs": [],
    "snippet": "@if (hasJobTitle() && isTitleReadMode()) {\n  <ng-container *ngTemplateOutlet=\"readTitle\"></ng-container>\n} @else if (isProfileOwner() && isTitleEditMode()) {\n  <ng-container *ngTemplateOutlet=\"editTitle\"></ng-container>\n}\n"
  },
  {
    "selector": "app-root",
    "className": "AppComponent",
    "path": "app.component.ts",
    "inputs": [],
    "snippet": "<tui-root>\n  <header\n    class=\"header-container\"\n    #headerContainer\n  >\n    <app-header></app-header>"
  },
  {
    "selector": "app-round-slider",
    "className": "RoundSliderComponent",
    "path": "shared/components/round-slider/round-slider.component.ts",
    "inputs": [],
    "snippet": "<div class=\"slider\">\n  <span class=\"digit\" *ngIf=\"!hideDigits\">-5</span>\n  <!--  <svg width=\"57\" height=\"29\" viewBox=\"0 0 57 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">-->\n  <!--    <path d=\"M56.9012 28.2479C56.9012 20.8249 53.9525 13.706 48.7036 8.45712C43.4548 3.20829 36.3359 0.259522 28.9129 0.259521C21.4899 0.259521 14.371 3.20828 9.12213 8.45712C3.8733 13.706 0.924531 20.8249 0.92453 28.2479H1.81668C1.81669 21.0615 4.67146 14.1695 9.75298 9.08797C14.8345 4.00644 21.7265 1.15168 28.9129 1.15168C36.0992 1.15168 42.9913 4.00645 48.0728 9.08797C53.1543 14.1695 56.0091 21.0615 56.0091 28.2479H56.9012Z\" fill=\"#DDDDDD\"/>-->\n  <!--  </svg>-->\n"
  },
  {
    "selector": "app-satisfied-icon",
    "className": "SatisfiedIconComponent",
    "path": "shared/icons/satisfied-icon/satisfied-icon.component.ts",
    "inputs": [
      "active"
    ],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"31\" height=\"31\" viewBox=\"0 0 31 31\" fill=\"none\" [ngClass]=\"{'active': active()}\">\n  <path d=\"M19.8604 18.9025C18.7308 20.2581 17.1493 21.0112 15.4173 21.0112C13.6852 21.0112 12.0284 20.3334 10.8988 19.0532C10.6728 18.8272 10.6728 18.4507 10.9741 18.2248C11.1247 18.1495 11.2 18.0742 11.3506 18.0742C11.5012 18.0742 11.6519 18.1495 11.8025 18.3001C13.6852 20.3334 17.2247 20.2581 18.9567 18.1495C19.1827 17.9235 19.5592 17.8482 19.7851 18.0742C20.0864 18.3001 20.0864 18.6766 19.8604 18.9025Z\" fill=\"#B3B3B3\"/>\n  <path d=\"M6.90747 9.8652L24.2283 9.56396V11.2207L6.90747 11.522V9.8652Z\" fill=\"#B3B3B3\"/>\n  <path d=\"M16.6221 10.9951H24.3036C24.0023 13.6309 22.4209 15.6642 20.5382 15.7395C18.5802 15.8148 16.5468 14.4593 16.6221 10.9951Z\" fill=\"#B3B3B3\"/>\n  <path d=\"M10.7481 15.8899C8.86543 15.8146 7.28396 13.7813 6.98273 11.1455H14.6642C14.6642 14.6097 12.6308 15.9652 10.7481 15.8899Z\" fill=\"#B3B3B3\"/>\n  <path d=\"M1.68387 14.9116C1.68387 22.5745 7.90511 28.7957 15.5679 28.7957C23.2315 28.7957 29.452 22.4984 29.452 14.8363C29.452 7.17348 23.2308 0.952239 15.5679 0.952239C7.90439 0.952239 1.68387 7.24952 1.68387 14.9116ZM3.47072 14.9116C3.47072 8.19102 8.92183 2.8144 15.5679 2.8144C22.2141 2.8144 27.6652 8.19102 27.6652 14.9116C27.6652 21.6326 22.289 27.0089 15.5679 27.0089C8.84693 27.0089 3.47072 21.6326 3.47072 14.9116Z\" fill=\"#B3B3B3\" stroke=\"#B3B3B3\" stroke-width=\"0.205386\"/>"
  },
  {
    "selector": "app-save-icon",
    "className": "SaveIconComponent",
    "path": "shared/icons/save-icon/save-icon.component.ts",
    "inputs": [
      "strokeWidth"
    ],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 21 21\" fill=\"none\">\n  <path\n    d=\"M14.1667 17.5V10.8333H5.83333V17.5M5.83333 2.5V6.66667H12.5M15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H13.3333L17.5 6.66667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5Z\"\n    [attr.stroke]=\"color()\"\n    [attr.stroke-width]=\"strokeWidth()\"\n    stroke-linecap=\"round\""
  },
  {
    "selector": "app-scanner-icon",
    "className": "ScannerIconComponent",
    "path": "shared/icons/scanner-icon/scanner-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  width=\"25\"\n  height=\"25\"\n  viewBox=\"0 0 25 25\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\""
  },
  {
    "selector": "app-scheduling",
    "className": "SchedulingComponent",
    "path": "pages/usersettings/sections/scheduling/scheduling.component.ts",
    "inputs": [],
    "snippet": "<div class=\"header\">\n  <h1 class=\"header__title\">{{'scheduling.settings' | translate}}</h1>\n  <div class=\"header__time-zone\">\n    <p class=\"header__time-zone-label\">\n      {{ 'scheduling.current_time_zone' | translate }}\n    </p>"
  },
  {
    "selector": "app-screenshot-full-view",
    "className": "ScreenshotFullViewComponent",
    "path": "shared/components/screenshot/screenshot-full-view/screenshot-full-view.component.ts",
    "inputs": [],
    "snippet": "<p>screenshot-full-view works!</p>"
  },
  {
    "selector": "app-screenshot-modal",
    "className": "ScreenshotModalComponent",
    "path": "pages/rateflow/flexfeedback/screenshot-modal/screenshot-modal.component.ts",
    "inputs": [],
    "snippet": "<div class=\"modal\">\n  <div class=\"header\">\n    <div class=\"screenshot-icon\">\n      <img src=\"assets/flexfeedback/screenshot-icon.svg\" />\n    </div>\n"
  },
  {
    "selector": "app-screenshot-overlay",
    "className": "ScreenshotOverlayComponent",
    "path": "shared/components/screenshot/screenshot-overlay/screenshot-overlay.component.ts",
    "inputs": [],
    "snippet": "<div class=\"screenshot\">\n  <img class=\"rotating\" src=\"/assets/loader.svg\" *ngIf=\"isLoading\" />\n  <img [src]=\"src\" *ngIf=\"!isLoading\" />\n</div>"
  },
  {
    "selector": "app-scroll-btn",
    "className": "ScrollBtnComponent",
    "path": "shared/components/scroll-btn/scroll-btn.component.ts",
    "inputs": [],
    "snippet": "<section class=\"btn-container\">\n  <button\n    title=\"Scroll to top\"\n    (click)=\"clickedScrollUp.emit()\"\n    class=\"scroll-btn\"\n    label=\"Scroll to top\""
  },
  {
    "selector": "app-scroll-down-btn",
    "className": "ScrollDownBtnComponent",
    "path": "shared/components/scroll-down-btn/scroll-down-btn.component.ts",
    "inputs": [],
    "snippet": "<button class=\"scroll-down-btn\" (click)=\"clickedScrollDown.emit()\" [ngStyle]=\"{\n    'top': top || null,\n    'bottom': bottom || null,\n    'left': left || null,\n    'right': right || null\n  }\" type=\"button\">"
  },
  {
    "selector": "app-search",
    "className": "SearchComponent",
    "path": "shared/UIkit/search/search.component.ts",
    "inputs": [
      "control",
      "inputName",
      "label",
      "placeholder",
      "disabled"
    ],
    "snippet": "@if(control()) {\n  <div class=\"form-field\">\n    <input\n      class=\"form-input search\"\n      type=\"text\"\n      [placeholder]=\"placeholder()\""
  },
  {
    "selector": "app-search-bar",
    "className": "SearchBarComponent",
    "path": "shared/components/search-bar/search-bar.component.ts",
    "inputs": [],
    "snippet": "<div class=\"search-bar\" *ngIf=\"currentPage\">\n  <app-search-bar-categories\n    *ngIf=\"currentPage === 'publicfeed' || currentPage === 'creatives'\"\n  ></app-search-bar-categories>\n  <app-search-bar-skills\n    *ngIf=\"currentPage === 'advisors'\""
  },
  {
    "selector": "app-search-bar-categories",
    "className": "SearchBarCategoriesComponent",
    "path": "shared/components/search-bar/search-bar-categories/search-bar-categories.component.ts",
    "inputs": [],
    "snippet": "<div class=\"search-bar col-2\">\n  <!-- <div class=\"search-bar__media-menu\">\n    <img src=\"assets/header/image.svg\" (click)=\"toggleMediatype('image')\" [ngClass]=\"{'active': selectedMediatypes.has('image')}\">\n    <img src=\"assets/header/audio.svg\" (click)=\"toggleMediatype('audio')\" [ngClass]=\"{'active': selectedMediatypes.has('audio')}\">\n    <img src=\"assets/header/video.svg\" (click)=\"toggleMediatype('video')\" [ngClass]=\"{'active': selectedMediatypes.has('video')}\">\n  </div> -->"
  },
  {
    "selector": "app-search-bar-skills",
    "className": "SearchBarSkillsComponent",
    "path": "shared/components/search-bar/search-bar-skills/search-bar-skills.component.ts",
    "inputs": [],
    "snippet": "<div class=\"search\">\n  <button\n    class=\"search__online-status\"\n    [ngClass]=\"{ 'search__online-status--active': isFilteredByOnline$ | async }\"\n    (click)=\"filterByOnline()\"\n  >"
  },
  {
    "selector": "app-search-icon",
    "className": "SearchIconComponent",
    "path": "shared/icons/search-icon/search-icon.component.ts",
    "inputs": [],
    "snippet": "<svg viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M42 42L33.3 33.3M38 22C38 30.8366 30.8366 38 22 38C13.1634 38 6 30.8366 6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22Z\" [attr.stroke]=\"color()\"\n        [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
  },
  {
    "selector": "app-search-input",
    "className": "SearchInputComponent",
    "path": "shared/UIkit/inputs/search-input/search-input.component.ts",
    "inputs": [
      "placeholder",
      "disabled",
      "square"
    ],
    "snippet": "<div\n  class=\"search-input\"\n  [ngClass]=\"{\n    'disabled': disabled(),\n    'square': square()\n  }\""
  },
  {
    "selector": "app-search-results",
    "className": "SearchResultsComponent",
    "path": "shared/components/search-results/search-results.component.ts",
    "inputs": [],
    "snippet": "<ng-container *ngIf=\"searchService.currentPage$ | async as searchBarSection\">\n  <div class=\"search-results\">\n    <ng-container\n      *ngIf=\"searchService.selectedCategories$ | async as selectedCategories\"\n    >\n      <app-search-results-categories"
  },
  {
    "selector": "app-search-results-categories",
    "className": "SearchResultsCategoriesComponent",
    "path": "shared/components/search-results/search-results-categories/search-results-categories.component.ts",
    "inputs": [],
    "snippet": "<div class=\"search-results\">\n  <div class=\"selected-category\" *ngFor=\"let option of categories\">\n    <p>{{ option.name }}</p>\n    <img\n      src=\"/src/assets/newsfeed/x-circle.svg\"\n      (click)=\"removeSearchResult(option)\""
  },
  {
    "selector": "app-search-results-skills",
    "className": "SearchResultsSkillsComponent",
    "path": "shared/components/search-results/search-results-skills/search-results-skills.component.ts",
    "inputs": [],
    "snippet": "<div class=\"results\">\n  <div\n    class=\"results__item results__item--selected\"\n    *ngFor=\"let skill of skills\"\n  >\n    <img"
  },
  {
    "selector": "app-second-card",
    "className": "SecondCardComponent",
    "path": "shared/components/onboarding-modal/second-card/second-card.component.ts",
    "inputs": [],
    "snippet": "<button mat-icon-button (click)=\"clickClose.emit()\" class=\"modal__btn--close\">\n  <img src=\"assets/close-modal-icon.svg\" alt=\"close-modal-icon\" />\n</button>\n\n<div class=\"modal__body\">\n  <div class=\"modal__header\">"
  },
  {
    "selector": "app-section-header",
    "className": "SectionHeaderComponent",
    "path": "pages/usersettings/components/section-header/section-header.component.ts",
    "inputs": [],
    "snippet": "Fixe<div class=\"section-header\">\n  <div class=\"icon-wrapper\">\n    <ng-content></ng-content>\n  </div>\n  @if (sectionTitle()) {\n    <h2 class=\"sectionTitle\" [innerHTML]=\"sectionTitle() | translate\"></h2>"
  },
  {
    "selector": "app-secure-payment-icon",
    "className": "SecurePaymentIconComponent",
    "path": "shared/icons/secure-payment-icon/secure-payment-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  width=\"130\"\n  height=\"41\"\n  viewBox=\"0 0 130 41\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\""
  },
  {
    "selector": "app-segment-title",
    "className": "SegmentTitleComponent",
    "path": "pages/profile/components/profile-info/segment-title/segment-title.component.ts",
    "inputs": [
      "title"
    ],
    "snippet": ""
  },
  {
    "selector": "app-select",
    "className": "SelectComponent",
    "path": "shared/UIkit/select/select.component.ts",
    "inputs": [
      "control",
      "inputName",
      "label",
      "placeholder",
      "hasAttachmentInput",
      "disabled",
      "options",
      "viewModel"
    ],
    "snippet": "@if (control()) {\n  <div class=\"form-field\" [class.with-attachment]=\"hasAttachment()\">\n    <label\n      class=\"form-label\"\n      [for]=\"inputName()\"\n      [ngClass]=\"{ disabled: disabled() }\">"
  },
  {
    "selector": "app-select-icebreaker-skill",
    "className": "SelectIcebreakerSkillComponent",
    "path": "ice-breaker/modules/select-icebreaker-skill/components/select-icebreaker-skill/select-icebreaker-skill.component.ts",
    "inputs": [],
    "snippet": "<section class=\"create-icebreaker-container\">\n  @if (isNotDesktop()) {\n    <app-mobile-header title=\"Create Capsule\" subtitle=\"to ask clients a series of questions about a topic you can select below\"></app-mobile-header>\n  } @else {\n    <app-desktop-header title=\"Create Capsule\" subtitle=\"to ask clients a series of questions about <br> a topic you can select below\"></app-desktop-header>\n  }"
  },
  {
    "selector": "app-select-skill-container",
    "className": "SelectSkillContainerComponent",
    "path": "shared/components/select-skill-container/select-skill-container.component.ts",
    "inputs": [],
    "snippet": "<section class=\"skill-select-container\">\n  <div class=\"header-illustration\">\n    <ng-content select=\"[header-illustration]\"></ng-content>\n    <h2 class=\"header-illustration__title\">\n      <ng-content select=\"[header-text]\"></ng-content>\n    </h2>"
  },
  {
    "selector": "app-self-contact-error-modal",
    "className": "SelfContactErrorModalComponent",
    "path": "pages/advisors/self-contact-error-modal/self-contact-error-modal.component.ts",
    "inputs": [],
    "snippet": "<div class=\"modal__container\">\n  <button mat-icon-button mat-dialog-close class=\"modal__btn--close\">\n    <img src=\"assets/close-modal-icon.svg\" alt=\"close-modal-icon\" />\n  </button>\n\n  <div class=\"modal__body\">"
  },
  {
    "selector": "app-send-icon",
    "className": "SendIconComponent",
    "path": "shared/icons/send-icon/send-icon.component.ts",
    "inputs": [],
    "snippet": "<svg viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M44 4L22 26M44 4L30 44L22 26M44 4L4 18L22 26\"\n    [attr.stroke]=\"color()\"\n    [attr.stroke-width]=\"strokeWidth()\"\n    stroke-linecap=\"round\""
  },
  {
    "selector": "app-service-message",
    "className": "ServiceMessageComponent",
    "path": "shared/model-based-components/conversation-messages/service-message/service-message.component.ts",
    "inputs": [
      "message",
      "direction",
      "isInternalChat"
    ],
    "snippet": "<img\n      src=\"assets/conversations/robot.svg\"\n      class=\"user-avatar\"\n      alt=\"Robot avatar\"\n    />\n  <div class=\"message__container\" [ngClass]=\"[isInternalChat() ? 'internal' : '']\">"
  },
  {
    "selector": "app-settings",
    "className": "SettingsComponent",
    "path": "pages/admin/settings/settings.component.ts",
    "inputs": [],
    "snippet": "<div class=\"settings\" *ngIf=\"settingsFormGroup\">\n  <form [formGroup]=\"settingsFormGroup\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"actions-container\">\n      <button type=\"submit\" class=\"btn action-button action-button--submit\">\n        <div *ngIf=\"isCreating\" class=\"spinner\" role=\"status\">\n          <app-small-spinner [diameter]=\"20\"></app-small-spinner>"
  },
  {
    "selector": "app-settings-icon",
    "className": "SettingsIconComponent",
    "path": "shared/icons/settings-icon/settings-icon.component.ts",
    "inputs": [
      "color",
      "strokeWidth"
    ],
    "snippet": "<svg\n  viewBox=\"0 0 20 20\" fill=\"none\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n>\n  <g clip-path=\"url(#clip0_4875_3170)\">"
  },
  {
    "selector": "app-share-ice-breaker-modal",
    "className": "ShareIceBreakerModalComponent",
    "path": "ice-breaker/modules/ice-breakers-list-old/ice-breaker-card-module/components/share-ice-breaker-modal/share-ice-breaker-modal.component.ts",
    "inputs": [],
    "snippet": "<section mat-dialog-content>\n  <button class=\"close-modal-btn\" (click)=\"close()\">\n    <img src=\"../../../../../../../../../assets/close-modal-icon.svg\" alt=\"close-modal-icon\" />\n  </button>\n  <article class=\"share-icon-container\">\n    <img src=\"../../../../../../../../../assets/icons/share.svg\" alt=\"Share icon\" />"
  },
  {
    "selector": "app-share-ice-breaker-modal",
    "className": "ShareIceBreakerModalComponent",
    "path": "ice-breaker/modules/share-ice-breaker-modal/share-ice-breaker-modal.component.ts",
    "inputs": [],
    "snippet": "<app-share-modal\n  shareTitle=\"ice-breaker-share-modal.share-your-capsule\"\n  [shareLink]=\"iceBreakerUrl\"\n>\n    <div class=\"ice-breaker-share-modal_title-row\">\n        <h4 class=\"ice-breaker-share-modal_title\">{{ titleText }}</h4>"
  },
  {
    "selector": "app-share-icon",
    "className": "ShareIconComponent",
    "path": "shared/icons/share-icon/share-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\">\n  <g clip-path=\"url(#clip0_6848_7444)\">\n    <path d=\"M11.5557 5.53704L17.3496 8.88971L11.5557 12.215V10.8205L10.5897 10.5523C10.0533 10.391 9.51683 10.3375 9.00766 10.3375C6.59373 10.3375 4.74359 11.8661 3.2137 13.3686C3.56259 12.4299 4.07177 11.3036 4.85023 10.3115C6.32541 8.40677 8.12217 7.41454 10.2679 7.36117L11.5817 7.33393V6.02011L11.5557 5.53704ZM10.5361 3.44482C10.3747 3.44482 10.2144 3.57893 10.2144 3.76647V6.01903C2.65108 6.23381 0.371259 16.426 1.81908 16.426C1.92594 16.426 2.08729 16.3453 2.24865 16.2112C4.1534 14.4951 6.19113 11.6789 9.00737 11.6789C9.40969 11.6789 9.81201 11.7324 10.2416 11.8665V14.0394C10.2416 14.227 10.4029 14.3611 10.5632 14.3611C10.6167 14.3611 10.6701 14.3338 10.7246 14.3077L19.603 9.18423C19.8178 9.07737 19.8178 8.75466 19.603 8.64781L10.6975 3.49836C10.6441 3.47113 10.5906 3.44482 10.5361 3.44482Z\" fill=\"#1E1E1E\"/>\n  </g>\n  <defs>\n    <clipPath id=\"clip0_6848_7444\">"
  },
  {
    "selector": "app-share-modal",
    "className": "ShareModalComponent",
    "path": "shared/complex-ui-components/modals/share-modal/share-modal.component.ts",
    "inputs": [
      "shareTitle",
      "shareLink"
    ],
    "snippet": "<app-button-close\n  class=\"share-modal_close-btn\"\n  (click)=\"close()\"\n></app-button-close>\n\n<div class=\"share-modal_title-container\">"
  },
  {
    "selector": "app-share-profile-carousel",
    "className": "ShareProfileCarouselComponent",
    "path": "shared/components/share-profile-modal/components/share-profile-carousel/share-profile-carousel.component.ts",
    "inputs": [],
    "snippet": "<section class=\"share-carousel\">\n  <button\n    class=\"next-btn next-btn__left\"\n    (click)=\"$event.preventDefault(); carouselComponent.prev()\"\n  >\n    <img height=\"19\" src=\"/assets/arrow-white.svg\" alt=\"Arrow left\" />"
  },
  {
    "selector": "app-share-profile-modal",
    "className": "ShareProfileModalComponent",
    "path": "pages/profile/components/share-profile-modal/share-profile-modal.component.ts",
    "inputs": [],
    "snippet": "<app-share-modal\n  [shareTitle]=\"titleText() | translate:appTitleContainer()\"\n  [shareLink]=\"profileUrl()\"\n>\n    <app-profile-info-card-title\n        [profile]=\"userProfile()\""
  },
  {
    "selector": "app-share-profile-modal",
    "className": "ShareProfileModalComponent",
    "path": "shared/components/share-profile-modal/share-profile-modal.component.ts",
    "inputs": [],
    "snippet": "<section class=\"share-container\" mat-dialog-content>\n  <button class=\"close-btn\" (click)=\"close()\">\n    <img src=\"assets/close-modal-icon.svg\" alt=\"close-modal-icon\" />\n  </button>\n  <article class=\"share-icon-container\">\n    <img src=\"assets/icons/share.svg\" alt=\"Share icon\" />"
  },
  {
    "selector": "app-sharing-advice-guide-modal",
    "className": "SharingAdviceGuideModalComponent",
    "path": "pages/usersettings/components/sharing-advice-guide-modal/sharing-advice-guide-modal.component.ts",
    "inputs": [],
    "snippet": "<h2 class=\"modal-title\" mat-dialog-title>{{ (data.type === 'personal_opinion' ? 'sharing_advice_guide.title_personal_opinion' : 'sharing_advice_guide.title_certified') | translate }}</h2>\n<mat-dialog-content>\n\n  <p class=\"modal-text sharing-advice-subtitle\">\n    {{ (data.type === 'personal_opinion' ? 'sharing_advice_guide.personal_opinion.subtitle' : 'sharing_advice_guide.certified_professional.subtitle') | translate}}\n  </p>"
  },
  {
    "selector": "app-sidebar-shrink",
    "className": "SidebarShrinkComponent",
    "path": "shared/icons/sidebar-shrink/sidebar-shrink.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\" fill=\"none\">\n  <g clip-path=\"url(#clip0_4124_63104)\">\n    <path d=\"M13.2383 2.95593C14.1151 2.95593 14.83 3.67075 14.83 4.5476C14.83 5.42444 14.1151 6.13926 13.2383 6.13926H3.70737C2.83052 6.13926 2.1157 5.42444 2.1157 4.5476C2.1157 3.67075 2.83052 2.95593 3.70737 2.95593H13.2383Z\" [attr.fill]=\"fill()\"/>\n    <path d=\"M24.094 11.6103C24.1226 11.6484 24.1321 11.7056 24.1512 11.7533C24.1988 11.839 24.2369 11.9344 24.2655 12.0297C24.2846 12.0869 24.3132 12.1345 24.3322 12.1917C24.3418 12.2489 24.3322 12.2965 24.3322 12.3537C24.3322 12.4014 24.3608 12.449 24.3608 12.4967C24.3608 12.5443 24.3322 12.592 24.3322 12.6396C24.3227 12.6968 24.3418 12.7445 24.3322 12.8017C24.3227 12.8589 24.2846 12.9065 24.2655 12.9637C24.2369 13.059 24.1988 13.1543 24.1512 13.2401C24.1226 13.2877 24.1226 13.3354 24.094 13.3831L20.9202 18.1485C20.6152 18.606 20.11 18.8538 19.5954 18.8538C19.2904 18.8538 18.9854 18.768 18.7185 18.5869C17.9847 18.1009 17.794 17.1096 18.2801 16.3853L19.8146 14.0883H3.70733C2.83048 14.0883 2.11566 13.3735 2.11566 12.4967C2.11566 11.6198 2.83048 10.905 3.70733 10.905H19.8051L18.2706 8.60807C17.7845 7.87419 17.9847 6.8925 18.709 6.40642C19.4429 5.92035 20.4246 6.1205 20.9106 6.84485L24.094 11.6103Z\" [attr.fill]=\"fill()\"/>\n    <path d=\"M3.70737 18.8442H13.2383C14.1151 18.8442 14.83 19.5591 14.83 20.4359C14.83 21.3127 14.1151 22.018 13.2383 22.018H3.70737C2.83052 22.018 2.1157 21.3032 2.1157 20.4264C2.1157 19.5495 2.83052 18.8442 3.70737 18.8442Z\" [attr.fill]=\"fill()\"/>\n  </g>"
  },
  {
    "selector": "app-signup-animation",
    "className": "SignupAnimationComponent",
    "path": "auth/signup-animation/signup-animation.component.ts",
    "inputs": [],
    "snippet": "<div #containerRef id=\"animation_container\">\n  <canvas\n    #canvasRef\n    id=\"canvas\"\n    style=\"position: absolute; display: block\"\n  ></canvas>"
  },
  {
    "selector": "app-signup-modal",
    "className": "SignupModalComponent",
    "path": "shared/components/auth-modal/signup-modal/signup-modal.component.ts",
    "inputs": [
      "conversationId"
    ],
    "snippet": "<app-icon-new-user></app-icon-new-user>\n\n<h2 class=\"login-modal-title\">{{ 'auth-header.sign-up' | translate }}</h2>\n<form class=\"form\" [formGroup]=\"form\" (submit)=\"onSubmit()\">\n  @if (form.get('username'); as nameForm) {\n    <app-input [control]=\"form.get('username')\" inputName=\"username\" [placeholder]=\"'validation.unique' | translate\""
  },
  {
    "selector": "app-sixth-card",
    "className": "SixthCardComponent",
    "path": "shared/components/onboarding-modal/sixth-card/sixth-card.component.ts",
    "inputs": [],
    "snippet": "<button mat-icon-button mat-dialog-close class=\"modal__btn--close\">\n  <img src=\"assets/close-modal-icon.svg\" alt=\"close-modal-icon\" />\n</button>\n\n<div class=\"modal__body\">\n  <img"
  },
  {
    "selector": "app-skill-card-list-item",
    "className": "SkillCardListItemComponent",
    "path": "pages/advisors/advisor-card/skill-card-list-item/skill-card-list-item.component.ts",
    "inputs": [],
    "snippet": "<div class=\"skill__container\">\n  <div\n    (click)=\"toggleSelected()\"\n    class=\"skill\"\n    [ngClass]=\"{\n      'skill--selected': isSelected,"
  },
  {
    "selector": "app-skill-card-request",
    "className": "SkillCardRequestComponent",
    "path": "pages/advisors/advisor-card/skill-card-request/skill-card-request.component.ts",
    "inputs": [],
    "snippet": "<div\n  class=\"skill-card-request skill-card-request__active\"\n  *ngIf=\"!feedbackChatMessageSaved\"\n>\n  <!--  <ng-container *ngIf=\"(isAuth$ | async)?.id\">-->\n  <!--    <div [matMenuTriggerFor]=\"menu\" class=\"skill-card-request__input skill-card-request__project-input\"-->"
  },
  {
    "selector": "app-skill-filter",
    "className": "SkillFilterComponent",
    "path": "shared/model-based-components/skill/skill-filter/skill-filter.component.ts",
    "inputs": [
      "artCategories",
      "skills",
      "allowMultiselect",
      "displayStage",
      "displayColumn",
      "placeholder",
      "isAddSkill",
      "getFilterResult"
    ],
    "snippet": "@if (displayStageComputed()) {\n  <div class=\"topic-select-stage\">\n    @if (skillsAreSelected()) {\n      2. {{ 'select-stage-2' | translate }}\n    } @else {\n      1. {{ 'select-stage-1' | translate }}"
  },
  {
    "selector": "app-skill-item",
    "className": "SkillItemComponent",
    "path": "pages/admin/skills/components/skill-item/skill-item.component.ts",
    "inputs": [],
    "snippet": "<mat-tab-group\n  [preserveContent]=\"true\"\n  mat-align-tabs=\"start\"\n  mat-stretch-tabs=\"false\"\n  #skillCard\n  [(selectedIndex)]=selectedIndex"
  },
  {
    "selector": "app-skills",
    "className": "SkillsComponent",
    "path": "pages/admin/skills/layout/skills.component.ts",
    "inputs": [],
    "snippet": "<div class=\"skills\" appLoadMoreOnscroll (loadMoreEvt)=\"loadMore()\">\n  <app-skill-item\n    (skillCreated)=\"fetchSkills()\"\n    (skillDeleted)=\"onSkillDelete($event)\"\n  ></app-skill-item>\n"
  },
  {
    "selector": "app-skills-button-list",
    "className": "SkillsButtonListComponent",
    "path": "shared/model-based-components/skill/skills-button-list/skills-button-list.component.ts",
    "inputs": [
      "skills"
    ],
    "snippet": "@for (skill of skills(); track skill.name) {\n  <app-button-chip\n    [chipItem]=\"skill\"\n    [isSelected]=\"isSelected(skill)\"\n    (click)=\"buttonClickHandler(skill)\"\n  ></app-button-chip>"
  },
  {
    "selector": "app-skills-tools",
    "className": "SkillsToolsComponent",
    "path": "pages/profile/rudimentary/skills-tools/layout/skills-tools/skills-tools.component.ts",
    "inputs": [],
    "snippet": "<section *ngIf=\"publicProfile$ | async as publicProfile\">\n  <article class=\"skills-tools-container\">\n    <ng-container *ngIf=\"publicProfile.user_skills.length; else setSettings\">\n      <section class=\"skills-card\">\n        <app-advisor-card\n          [advisor]=\"publicProfile\""
  },
  {
    "selector": "app-skills-tools-icon",
    "className": "SkillsToolsIconComponent",
    "path": "shared/icons/skills-tools-icon/skills-tools-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n>\n  <g clip-path=\"url(#clip0_5362_4377)\">\n    <path"
  },
  {
    "selector": "app-skillset-item",
    "className": "SkillsetItemComponent",
    "path": "pages/usersettings/components/topics/skillset-item/skillset-item.component.ts",
    "inputs": [],
    "snippet": "<form class=\"skillset-item\" [formGroup]=\"form\">\n\n  <div class=\"form_field__group\">\n    <div class=\"form_field topic\">\n      <span\n        class=\"form-label\""
  },
  {
    "selector": "app-skip",
    "className": "SkipComponent",
    "path": "pages/rateflow/skip/skip.component.ts",
    "inputs": [],
    "snippet": "<p>skip works!</p>"
  },
  {
    "selector": "app-slide-connected",
    "className": "SlideConnectedComponent",
    "path": "pages/insights/rateback-summary-card/slide-connected/slide-connected.component.ts",
    "inputs": [],
    "snippet": "<div class=\"slide-connected\">\n  <img\n    class=\"slide-connected__img\"\n    src=\"assets/ratebacks/connected.svg\"\n    alt=\"connected\"\n  />"
  },
  {
    "selector": "app-slide-recommend",
    "className": "SlideRecommendComponent",
    "path": "pages/insights/rateback-summary-card/slide-recommend/slide-recommend.component.ts",
    "inputs": [],
    "snippet": "<div class=\"slide-recommend\" [ngClass]=\"{ 'slide-recommend--tips': tips }\">\n  <ng-container *ngIf=\"tips; else closedWithoutTipsTpl\">\n    <div class=\"slide-recommend__header\">\n      <img\n        class=\"slide-recommend__img\"\n        src=\"assets/ratebacks/recommend.svg\""
  },
  {
    "selector": "app-slider",
    "className": "SliderComponent",
    "path": "shared/components/slider/slider.component.ts",
    "inputs": [],
    "snippet": "<div class=\"emoji-slider emoji-slider-{{ projectID }}\">\n  <div class=\"emoji-slider__face-panel\">\n    <svg class=\"emoji-slider__face\" *ngIf=\"!staticValue\">\n      <use\n        [attr.xlink:href]=\"\n          'assets/emoji-neck-defs.svg#icon-Emoji-anim-fill-neck_' + currentValue"
  },
  {
    "selector": "app-small-spinner",
    "className": "SmallSpinnerComponent",
    "path": "shared/components/small-spinner/small-spinner.component.ts",
    "inputs": [],
    "snippet": "<img\n  class=\"rotating\"\n  src=\"/assets/loader.svg\"\n  [ngStyle]=\"{\n    'width.px': diameter,\n    'height.px': diameter,"
  },
  {
    "selector": "app-sponsor-box",
    "className": "SponsorBoxComponent",
    "path": "shared/components/sponsor-box/sponsor-box.component.ts",
    "inputs": [],
    "snippet": "<div class=\"sponsor-box\">\n    <div class=\"sponsors\">\n      <a href=\"https://welcome-alliance.org/en/\" target=\"_blank\"> <img\n        loading=\"lazy\"\n        src=\"assets/sponsors/Welcome-Alliance.png\"\n        alt=\"Company logo\""
  },
  {
    "selector": "app-stats",
    "className": "StatsComponent",
    "path": "pages/conversations/components/stats/stats.component.ts",
    "inputs": [],
    "snippet": "<div class=\"stats\" [ngClass]=\"{ 'stats--expanded': expanded }\">\n  <div class=\"stats__item overview\">\n    <div>\n      <span>{{ 'stats.last_interaction' | translate }}</span>\n      <span>{{\n          (feedbackPath$?.value === 'my_advice' ? 'stats.total_income' : 'stats.spent_total') | translate"
  },
  {
    "selector": "app-stats",
    "className": "StatsComponent",
    "path": "pages/profile/components/profile-info/stats/stats.component.ts",
    "inputs": [
      "profile"
    ],
    "snippet": "<app-segment-title\n  title=\"stats.title\"\n></app-segment-title>\n\n<div class=\"stats_rows-container\">\n  @for (statItem of scoresList(); track statItem.title) {"
  },
  {
    "selector": "app-step-card",
    "className": "StepCardComponent",
    "path": "pages/why/step-card/step-card.component.ts",
    "inputs": [],
    "snippet": "<span class=\"step-card_header\">\n  <ng-content select=\"[header]\"> </ng-content>\n</span>\n<h3 class=\"step-card_title\">\n  <ng-content select=\"[title]\"> </ng-content>\n</h3>"
  },
  {
    "selector": "app-story",
    "className": "StoryComponent",
    "path": "pages/admin/onboarding/story/story.component.ts",
    "inputs": [],
    "snippet": "<div class=\"story\">\n  <div class=\"story__name\">\n    <h1 contenteditable=\"true\" #storyName>{{ story.name }}</h1>\n    <mat-slide-toggle\n      (change)=\"onStoryActiveToggle($event)\"\n      [checked]=\"story.active\""
  },
  {
    "selector": "app-string-typer",
    "className": "StringTyperComponent",
    "path": "shared/complex-ui-components/string-typer/string-typer.component.ts",
    "inputs": [
      "stringsToType",
      "reserveSpaceWith",
      "defaultConfig"
    ],
    "snippet": "<span\n  class=\"string-typer_text\"\n  [innerHTML]=\"text$ | async \"\n  #textContainer\n></span>\n<span class=\"string-typer_blinking-cursor\" #blinkingCursor></span>"
  },
  {
    "selector": "app-stripe",
    "className": "StripeComponent",
    "path": "auth/stripe/stripe.component.ts",
    "inputs": [],
    "snippet": "<div class=\"stripe\">\n  <h1 *ngIf=\"!errorString\">Completing Stripe authorization</h1>\n  <h1 *ngIf=\"errorString\" class=\"mat-error\">{{ errorString }}</h1>\n</div>"
  },
  {
    "selector": "app-stripe-bank-card-form",
    "className": "StripeBankCardFormComponent",
    "path": "shared/components/stripe-bank-card-form/stripe-bank-card-form.component.ts",
    "inputs": [],
    "snippet": "<form class=\"payment-form\">\n  <div id=\"card-element\"></div>\n\n  <div id=\"card-errors\" role=\"alert\"></div>\n\n  <button"
  },
  {
    "selector": "app-subtitle-card",
    "className": "SubtitleCardComponent",
    "path": "pages/why/subtitle-card/subtitle-card.component.ts",
    "inputs": [],
    "snippet": "<div class=\"subtitle-card\" #subtitle></div>"
  },
  {
    "selector": "app-success-escalation",
    "className": "SuccessEscalationComponent",
    "path": "shared/components/escalation-modal/success-escalation/success-escalation.component.ts",
    "inputs": [],
    "snippet": "<div class=\"modal-header\">\n  <h2 mat-dialog-title>{{ 'escalation.success_title' | translate }}</h2> <app-close-icon strokeWidth=\"3\" (click)=\"close()\"></app-close-icon>\n</div>\n\n<mat-dialog-content >\n  <p>{{ 'escalation.success_description' | translate }}</p>"
  },
  {
    "selector": "app-success-sign-up-modal",
    "className": "SuccessSignUpModalComponent",
    "path": "shared/components/auth-modal/success-sign-up-modal/success-sign-up-modal.component.ts",
    "inputs": [],
    "snippet": "<canvas class=\"absolute\" id=\"canvas_confetti\"></canvas>\n<div class=\"modal-wrapper\">\n  <div class=\"modal-header\">\n    <h2 class=\"modal-title\">{{ 'modal.success-signup-title' | translate }}</h2>\n    <app-close-icon (click)=\"close()\"></app-close-icon>\n  </div>"
  },
  {
    "selector": "app-summary",
    "className": "SummaryComponent",
    "path": "pages/open-requests/components/summary/summary.component.ts",
    "inputs": [
      "openRequestConversation"
    ],
    "snippet": "<div class=\"summery_content\">\n    @if (summary()) {\n    <h4 class=\"summary_title\">\n  <span class=\"summary_title-text\">\n    {{ \"summary.case_summary\" | translate }}\n  </span>"
  },
  {
    "selector": "app-sunflawer-icon",
    "className": "SunflawerIconComponent",
    "path": "shared/icons/sunflawer-icon/sunflawer-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"78\" height=\"66\" viewBox=\"0 0 78 66\" fill=\"none\">\n  <g clip-path=\"url(#clip0_6027_11367)\">\n    <path d=\"M62.7904 52.5231C62.7108 53.1702 63.0142 53.3137 63.3882 53.3371C65.2702 53.4426 67.1109 53.8379 68.9782 54.0399C69.3581 54.0809 69.576 54.0341 69.3934 54.6051C69.0577 55.6505 68.5982 56.6403 68.236 57.671C68.1329 57.9639 67.9532 58.0517 67.5763 57.8907C65.9682 57.2054 64.3307 56.5934 62.7108 55.9375C61.7154 55.5334 61.6329 55.5685 61.3649 56.5817C61.0763 57.671 60.7906 58.7633 60.4578 59.8409C60.2664 60.4559 60.5962 60.693 61.0792 60.819C62.1159 61.0884 63.1644 61.3226 64.204 61.5803C65.1111 61.8029 66.0124 62.0489 66.9224 62.2509C67.2287 62.3183 67.2582 62.491 67.2758 62.7341C67.3406 63.5686 67.0962 64.3622 66.9313 65.1616C66.8311 65.6477 66.4424 65.352 66.2362 65.2905C65.1877 64.9742 64.151 64.617 63.1173 64.2597C61.1499 63.5833 59.1943 62.8776 57.2211 62.2216C56.0695 61.838 56.0106 61.7062 56.3463 60.5613C56.9383 58.5378 57.4596 56.4939 58.0192 54.4645C58.5051 52.7046 59.0029 50.9477 59.5036 49.1907C59.907 47.7792 60.2163 46.3444 60.6905 44.9505C60.8524 44.4761 60.9968 44.5025 61.415 44.6459C63.6386 45.4219 65.8828 46.1423 68.1182 46.8919C69.4229 47.3283 70.7158 47.7968 72.0293 48.2155C72.3504 48.318 72.4858 48.4615 72.3739 48.7514C72.103 49.4571 71.7849 50.1453 71.5228 50.8539C71.3166 51.4162 70.9337 51.3957 70.4979 51.22C68.6719 50.4762 66.8547 49.7031 65.0199 48.9828C64.4603 48.7631 63.9036 48.5699 63.7593 49.5831C63.6386 50.4528 63.1968 51.2786 62.9052 52.1248C62.8404 52.3122 62.7992 52.5055 62.7963 52.5201L62.7904 52.5231Z\" fill=\"#FAD44F\"/>\n    <path d=\"M55.1122 61.5159C53.8929 61.7472 52.7796 61.431 51.6899 61.1499C51.2275 61.0298 51.0861 60.3651 50.8417 59.9317C49.643 57.7999 48.4856 55.6476 47.3075 53.507C46.8834 52.7368 46.0676 52.3737 45.4255 51.6914C45.1163 52.5289 45.1958 53.3606 45.0338 54.1454C44.8336 55.1029 44.6156 56.0956 44.6009 57.0824C44.5862 58.1161 44.1356 59.0766 44.1827 60.1074C44.1974 60.4441 43.9765 60.5466 43.6849 60.5466C43.4552 60.5466 43.2255 60.5437 42.9987 60.5203C41.8442 60.3973 41.7942 60.3592 41.8501 59.2289C42.0681 54.9214 42.4922 50.6226 42.61 46.3063C42.6424 45.0969 42.875 43.8817 42.8809 42.6576C42.8809 42.3911 42.8898 42.1042 43.255 42.113C43.7291 42.1247 44.1385 41.8289 44.5832 41.8231C47.0925 41.7996 49.6018 41.3516 52.1111 41.7908C54.7087 42.2447 55.5569 44.1745 55.0297 46.4556C54.5438 48.5582 53.51 50.2419 51.8136 51.548C51.6369 51.6856 51.4543 51.8818 51.2511 51.914C50.2703 52.078 50.3145 52.5143 50.7239 53.2669C52.2024 55.9726 53.6249 58.7106 55.1092 61.513L55.1122 61.5159ZM45.3018 48.5406C45.296 49.5362 47.228 50.9769 48.4208 50.4791C49.6784 49.955 50.8181 49.2141 51.7076 48.1628C52.2318 47.545 52.5028 46.4878 51.5574 45.7675C51.1686 45.4717 50.774 45.217 50.341 45.0178C49.0334 44.4087 47.7169 43.8202 46.2325 43.7821C45.8997 43.7733 45.617 43.7645 45.5934 44.233C45.5227 45.5654 45.4167 46.8949 45.3018 48.5406Z\" fill=\"#FAD44F\"/>\n    <path d=\"M44.66 24.7803C44.6218 26.4553 44.1181 28.0454 43.8649 29.6823C43.6351 31.1581 43.2847 32.6135 42.9872 34.0777C42.9519 34.2446 42.9106 34.4086 42.8782 34.5755C42.7928 35.0206 43.0314 35.656 42.3923 35.8054C41.7237 35.9635 40.2924 35.0528 40.1304 34.5257C39.5119 32.5169 38.8699 30.5168 38.2396 28.511C37.6034 26.4787 36.929 24.4553 36.3488 22.4054C35.9394 20.9559 35.9983 20.9823 37.5386 20.9179C38.2308 20.8886 38.5047 21.1902 38.6931 21.7583C39.509 24.2239 40.3395 26.6837 41.1582 29.1464C41.2054 29.287 41.2407 29.4422 41.4056 29.448C41.6589 29.4597 41.7355 29.246 41.7826 29.0527C42.033 28.0688 42.2745 27.0819 42.516 26.0951C42.9842 24.1771 43.4496 22.259 43.9208 20.341C44.0416 19.852 44.4451 19.9076 44.8161 19.8812C45.3139 19.8432 45.7527 19.9427 45.9029 20.4698C46.5126 22.5724 47.0869 24.6866 47.6965 26.7891C48.0411 27.978 48.4269 29.1552 48.798 30.347C49.122 30.2738 49.0101 29.9985 49.0366 29.8082C49.5019 26.4172 49.9643 23.0233 50.4178 19.6294C50.4797 19.1667 50.6829 19.117 51.0481 19.3337C51.7726 19.7641 52.4971 20.1975 53.2334 20.6104C53.5633 20.7949 53.5486 21.0818 53.4749 21.3513C52.8358 23.7437 52.1201 26.1185 51.5517 28.5256C51.1954 30.0307 50.7683 31.5125 50.409 33.0147C50.2323 33.7526 49.979 34.4759 49.8259 35.2168C49.7169 35.7527 49.2574 35.8991 48.9129 36.1597C48.6743 36.3412 48.4623 36.2534 48.3592 35.9049C47.7937 33.9898 47.2164 32.0776 46.6215 30.1684C46.059 28.3616 45.4759 26.5636 44.9016 24.7598C44.8191 24.7657 44.7366 24.7715 44.6571 24.7774L44.66 24.7803Z\" fill=\"#FAD44F\"/>\n    <path d=\"M58.5316 11.4653C58.8085 9.21051 59.0824 6.95279 59.3651 4.69799C59.4564 3.96299 59.5889 3.23384 59.6478 2.49883C59.6861 2.00395 59.91 1.80776 60.3841 1.74919C60.979 1.67598 61.5769 1.57935 62.1512 1.41829C62.9111 1.2016 63.0907 1.36851 62.914 2.16208C62.4811 4.10355 62.1335 6.06258 61.7477 8.01576C61.1175 11.1959 60.499 14.376 59.8393 17.5474C59.7715 17.8724 59.9394 18.464 59.3445 18.4669C58.7407 18.4669 58.1428 18.4903 57.7894 17.7289C56.7704 15.5386 55.6571 13.3892 54.5851 11.2252C54.0078 10.0656 53.4365 8.90304 52.6737 7.76685C52.6118 8.08311 52.5411 8.39644 52.4911 8.71562C52.0964 11.272 51.687 13.8284 51.3307 16.3907C51.2482 16.9734 51.0833 17.0144 50.5826 16.8065C48.8332 16.0745 48.8155 16.0891 49.0335 14.2121C49.5371 9.88988 50.0878 5.57355 50.5355 1.24552C50.6533 0.112267 51.528 0.355316 52.1347 0.0946971C52.8003 -0.192277 52.8651 0.422667 53.0507 0.79749C54.6941 4.11233 56.3286 7.43303 57.9661 10.7508C58.0869 10.9997 58.2224 11.2398 58.349 11.4858C58.4109 11.4829 58.4757 11.477 58.5375 11.4741L58.5316 11.4653Z\" fill=\"#1F62AE\"/>"
  },
  {
    "selector": "app-switch",
    "className": "SwitchComponent",
    "path": "shared/switch/switch.component.ts",
    "inputs": [
      "control",
      "inputName",
      "label",
      "description",
      "disabled"
    ],
    "snippet": "@if (control()) {\n  <div class=\"switch\" [ngClass]=\"{ disabled: disabled() }\">\n    <div class=\"switch_header\">\n      <label class=\"form-label\" [for]=\"inputName()\">{{\n        label() | translate\n      }}</label>"
  },
  {
    "selector": "app-tabs",
    "className": "TabsComponent",
    "path": "shared/UIkit/tabs/tabs.component.ts",
    "inputs": [
      "selected",
      "tabs"
    ],
    "snippet": "<div class=\"tabs\">\n  @for (tab of tabs(); track tab.name) {\n    <div\n      class=\"tab-label selected\"\n      [ngClass]=\"{ selected: selected() === tab.value, disabled: tab.disabled }\"\n    >"
  },
  {
    "selector": "app-tags",
    "className": "TagsComponent",
    "path": "pages/admin/skills/components/tags/tags.component.ts",
    "inputs": [],
    "snippet": "<div class=\"wrapper\">\n  <mat-form-field>\n    <mat-label>Tags</mat-label>\n    <mat-chip-grid #chipList>\n      <mat-chip\n        *ngFor=\"let option of selectedOptions; let i = index\""
  },
  {
    "selector": "app-tags-order",
    "className": "TagsOrderComponent",
    "path": "pages/admin/tags-order/layout/tags-order.component.ts",
    "inputs": [],
    "snippet": "<div class=\"tags\">\n  <h2 class=\"tags__title\">Tags appearance order</h2>\n  <div cdkDropList (cdkDropListDropped)=\"drop($event)\">\n    <div\n      class=\"tag\"\n      [ngClass]=\"{ 'tag--active': tag.is_active }\""
  },
  {
    "selector": "app-task-icon",
    "className": "TaskIconComponent",
    "path": "shared/icons/task-icon/task-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 26 26\" fill=\"none\">\n  <g clip-path=\"url(#clip0_7226_13241)\">\n    <path d=\"M22.3638 11.2102V12.1302C22.3625 14.2867 21.6643 16.3849 20.3731 18.1121C19.0819 19.8392 17.2671 21.1027 15.1991 21.7141C13.1312 22.3256 10.921 22.2521 8.89824 21.5048C6.87545 20.7575 5.14842 19.3763 3.97473 17.5673C2.80104 15.7583 2.24356 13.6183 2.38545 11.4665C2.52733 9.3148 3.36098 7.26656 4.76205 5.62731C6.16312 3.98805 8.05656 2.84562 10.16 2.37038C12.2634 1.89515 14.464 2.11257 16.4338 2.99024M22.3638 4.13024L12.3638 14.1402L9.36378 11.1402\"  [attr.stroke]=\"color()\"\n          [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </g>\n  <defs>"
  },
  {
    "selector": "app-terms",
    "className": "TermsComponent",
    "path": "pages/terms/terms.component.ts",
    "inputs": [],
    "snippet": "<div class=\"container terms\">\n  <h1 class=\"header-title\">{{ 'title' | translate }}</h1>\n    <div class=\"WordSection1 MsoNoSpacing\">\n      <div [innerHTML]=\"htmlLangBasedLoadService.htmlContent\"></div>\n    </div>\n</div>"
  },
  {
    "selector": "app-text-input",
    "className": "TextInputComponent",
    "path": "shared/components/text-input/text-input.component.ts",
    "inputs": [
      "recordingProcess",
      "withAdditionalMenu",
      "isStartUploadAudio"
    ],
    "snippet": "<div class=\"text-input__wrapper\" #wrapperRef [ngClass]=\"{ 'pb-0': isRecording || audioMessage?.url }\">\n  <section class=\"text-input-area\">\n    <div class=\"text-input-area__field\" (click)=\"focusInput()\" (focusin)=\"onFocusInput.emit(true)\">\n      @if (useRichEditor) {\n        <div class=\"text-input__editor\" #editorHost>\n          <tui-editor"
  },
  {
    "selector": "app-textarea",
    "className": "TextareaComponent",
    "path": "shared/UIkit/textarea/textarea.component.ts",
    "inputs": [
      "control",
      "inputName",
      "label",
      "placeholder",
      "rows",
      "cols",
      "minLength",
      "readonly",
      "disabled",
      "required"
    ],
    "snippet": "@if (control()) {\n  <div class=\"form-field\">\n    <label\n      class=\"form-label\"\n      [for]=\"inputName()\"\n      [ngClass]=\"{ disabled: disabled() }\""
  },
  {
    "selector": "app-third-card",
    "className": "ThirdCardComponent",
    "path": "shared/components/onboarding-modal/third-card/third-card.component.ts",
    "inputs": [],
    "snippet": "<div class=\"modal\">\n  <a\n    mat-icon-button\n    mat-dialog-close\n    class=\"modal__btn--close\"\n    routerLink=\"/why\""
  },
  {
    "selector": "app-time-icon",
    "className": "TimeIconComponent",
    "path": "shared/icons/time-icon/time-icon.component.ts",
    "inputs": [],
    "snippet": "<svg viewBox=\"0 0 49 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M24.8984 23.306V13.5933H20.7358V25.3873C20.7358 25.9393 20.9551 26.4687 21.3454 26.859C21.7358 27.2493 22.2651 27.4686 22.8171 27.4686H32.5299V23.306H24.8984Z\" [attr.fill]=\"fill()\"/>\n  <path d=\"M41.893 16.0872C42.8885 15.5125 43.2296 14.2396 42.6549 13.2441C42.0801 12.2486 40.8072 11.9076 39.8117 12.4823C38.8163 13.057 38.4752 14.3299 39.0499 15.3254C39.6247 16.3209 40.8976 16.662 41.893 16.0872Z\" [attr.fill]=\"fill()\"/>\n  <path d=\"M35.7174 8.39359C36.2921 7.39812 35.951 6.12521 34.9555 5.55048C33.9601 4.97574 32.6872 5.31682 32.1124 6.31229C31.5377 7.30776 31.8788 8.58066 32.8742 9.1554C33.8697 9.73013 35.1426 9.38906 35.7174 8.39359Z\" [attr.fill]=\"fill()\"/>\n  <path d=\"M41.5482 23.9999C41.5482 27.4303 40.531 30.7836 38.6252 33.6358C36.7194 36.4881 34.0106 38.7111 30.8414 40.0239C27.6721 41.3366 24.1848 41.6801 20.8204 41.0108C17.4559 40.3416 14.3655 38.6897 11.9399 36.2641C9.51424 33.8385 7.86237 30.7481 7.19314 27.3836C6.52391 24.0192 6.86738 20.5318 8.18012 17.3626C9.49286 14.1934 11.7159 11.4846 14.5681 9.57878C17.4204 7.67298 20.7737 6.65577 24.2041 6.65577H26.2854V2.49316H24.2041C19.9504 2.49316 15.7923 3.75451 12.2555 6.11771C8.71876 8.4809 5.96218 11.8398 4.33438 15.7697C2.70658 19.6995 2.28068 24.0238 3.11052 28.1957C3.94037 32.3676 5.98869 36.1997 8.99646 39.2075C12.0042 42.2153 15.8364 44.2636 20.0083 45.0935C24.1802 45.9233 28.5045 45.4974 32.4343 43.8696C36.3642 42.2418 39.7231 39.4852 42.0863 35.9485C44.4495 32.4117 45.7108 28.2536 45.7108 23.9999V21.9186H41.5482V23.9999Z\" [attr.fill]=\"fill()\"/>\n</svg>"
  },
  {
    "selector": "app-tips",
    "className": "TipsComponent",
    "path": "shared/components/tips/tips.component.ts",
    "inputs": [],
    "snippet": "<div\n  class=\"tips\"\n  [ngClass]=\"{ 'tips--feedback-session': isFeedbackSessionTip }\"\n>\n  <button\n    mat-button"
  },
  {
    "selector": "app-topics",
    "className": "TopicsComponent",
    "path": "pages/usersettings/components/topics/topics.component.ts",
    "inputs": [],
    "snippet": "@if (allSkills() && skills().length > 0) {\n  <div class=\"topics\">\n    <app-section-header\n      title=\"{{ 'advisors_skillset.select_adjust' | translate }}\"\n    >\n      <app-topics-icon></app-topics-icon>"
  },
  {
    "selector": "app-topics-and-expertise",
    "className": "TopicsAndExpertiseComponent",
    "path": "pages/usersettings/sections/topics-and-expertise/topics-and-expertise.component.ts",
    "inputs": [],
    "snippet": "<app-section-header [title]=\"'topics_tools.discover_title' | translate\">\n  <app-skills-tools-icon></app-skills-tools-icon>\n</app-section-header>\n\n<app-advisor-skillset\n  class=\"list--skills\""
  },
  {
    "selector": "app-topics-icon",
    "className": "TopicsIconComponent",
    "path": "shared/icons/topics-icon/topics-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  width=\"90\"\n  height=\"91\"\n  viewBox=\"0 0 90 91\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\""
  },
  {
    "selector": "app-total-score",
    "className": "TotalScoreComponent",
    "path": "pages/advisors/advisor-card/total-score/total-score.component.ts",
    "inputs": [],
    "snippet": "<ng-container *ngIf=\"userSkill; else empty\">\n  <button\n    class=\"total-score-btn total-score-btn__hover-state\"\n    cdkOverlayOrigin\n    [ngClass]=\"{ 'scale-down': smallBtn }\"\n    (click)=\"openPopup()\""
  },
  {
    "selector": "app-transactions",
    "className": "TransactionsComponent",
    "path": "pages/transactions/transactions.component.ts",
    "inputs": [],
    "snippet": "<app-project-menu-top\n  (activatedItem)=\"onMenuItemSelect($event)\"\n  [menuItems]=\"menuItems\"\n></app-project-menu-top>\n<router-outlet></router-outlet>"
  },
  {
    "selector": "app-transactions-cap",
    "className": "TransactionsCapComponent",
    "path": "pages/transactions/transactions-cap/transactions-cap.component.ts",
    "inputs": [],
    "snippet": "<div class=\"cap\">\n  <h2 class=\"cap__subtitle\">\n    If you spent €{{ transactionsService.freeTierCap() }} on Getme.Global on a\n    given month you can use the website for free til the end of that month\n  </h2>\n"
  },
  {
    "selector": "app-transactions-history",
    "className": "TransactionsHistoryComponent",
    "path": "pages/transactions/transactions-history/transactions-history.component.ts",
    "inputs": [],
    "snippet": "<div class=\"history\">\n  <h2 class=\"history__subtitle\">How you make money</h2>\n  <app-small-spinner [diameter]=\"50\" *ngIf=\"!transactions\"></app-small-spinner>\n  <div class=\"history__item\" *ngFor=\"let transaction of transactions\">\n    <div class=\"history__item--icon\">\n      <img"
  },
  {
    "selector": "app-transactions-ideas",
    "className": "TransactionsIdeasComponent",
    "path": "pages/transactions/transactions-ideas/transactions-ideas.component.ts",
    "inputs": [],
    "snippet": "<div class=\"ideas\">\n  <h2 class=\"ideas__subtitle\">How to make extra money on our platform</h2>\n  <div class=\"ideas__item\">\n    <div class=\"ideas__item--title\">\n      <h3>Invite your friends</h3>\n      <p class=\"ideas__item--text\">"
  },
  {
    "selector": "app-transactions-invoices",
    "className": "TransactionsInvoicesComponent",
    "path": "pages/transactions/transactions-invoices/transactions-invoices.component.ts",
    "inputs": [],
    "snippet": "<div class=\"invoices\">\n  <h2 class=\"invoices__subtitle\">Current and past payment receipts</h2>\n</div>"
  },
  {
    "selector": "app-trash-icon",
    "className": "TrashIconComponent",
    "path": "shared/icons/trash-icon/trash-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\">\n  <path\n    fill=\"none\"\n    [attr.stroke]=\"color()\"\n    [attr.stroke-width]=\"strokeWidth()\"\n    stroke-miterlimit=\"10\""
  },
  {
    "selector": "app-trends-icon",
    "className": "TrendsIconComponent",
    "path": "shared/icons/trends-icon/trends-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 24\" fill=\"none\">\n  <g clip-path=\"url(#clip0_5151_3394)\">\n    <path d=\"M23.8022 6L14.3022 15.5L9.30225 10.5L1.80225 18M23.8022 6H17.8022M23.8022 6V12\" [attr.stroke]=\"color()\"\n          [attr.stroke-width]=\"strokeWidth()\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </g>\n  <defs>"
  },
  {
    "selector": "app-trusted-advisor-payment",
    "className": "TrustedAdvisorPaymentComponent",
    "path": "pages/insights/trusted-advisor-payment/trusted-advisor-payment.component.ts",
    "inputs": [],
    "snippet": "<div class=\"trusted-advisor\">\n  <h2 class=\"trusted-advisor__title\">Trusted connector review</h2>\n\n  <div class=\"trusted-advisor__body\">\n    <div class=\"trusted-advisor__receipt\">\n      <app-receipt"
  },
  {
    "selector": "app-type-multi-select",
    "className": "TypeMultiSelectComponent",
    "path": "shared/components/multi-select/type-multi-select.component.ts",
    "inputs": [
      "items"
    ],
    "snippet": "<div class=\"nested-content\">\n  <ng-content></ng-content>\n</div>\n<div class=\"select-filter\">\n  <button class=\"filter-btn\" [ngClass]=\"{active: selected()?.length > 0, opened: openList()}\" (click)=\"switchItems()\">\n    <app-settings-icon [color]=\"selected()?.length > 0 ? 'white' : '#1E1E1E' \" strokeWidth=\"2\"></app-settings-icon>"
  },
  {
    "selector": "app-typing-card",
    "className": "TypingCardComponent",
    "path": "shared/components/typing-card/typing-card.component.ts",
    "inputs": [
      "textSplitter",
      "textWithSplit",
      "secondTextWithSplit",
      "config"
    ],
    "snippet": "<div class=\"container\" [ngStyle]=\"{'background': config().bgColor}\">\n  <div class=\"typing-box\" #typingCard [ngStyle]=\"{'font-size': fontSize() + 'px', 'line-height': '95%', 'letter-spacing': '-1px'}\"></div>\n</div>"
  },
  {
    "selector": "app-upload-btn-icon",
    "className": "UploadBtnIconComponent",
    "path": "shared/icons/upload-btn-icon/upload-btn-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  width=\"17\"\n  height=\"16\"\n  viewBox=\"0 0 17 16\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\""
  },
  {
    "selector": "app-upload-card",
    "className": "UploadCardComponent",
    "path": "pages/why/upload-card/upload-card.component.ts",
    "inputs": [],
    "snippet": "<div class=\"upload-card\" #cardRef>\n  <img class=\"heart\" src=\"assets/why/heart.svg\" alt=\"\" />\n  <a\n    class=\"upload\"\n    routerLink=\"/auth\"\n    [queryParams]=\"{ mode: 'signup', portfolio: true }\""
  },
  {
    "selector": "app-upload-icon",
    "className": "UploadIconComponent",
    "path": "shared/icons/upload-icon/upload-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\" fill=\"none\">\n  <path\n    d=\"M21.3638 15.1302V19.1302C21.3638 19.6607 21.1531 20.1694 20.778 20.5445C20.4029 20.9195 19.8942 21.1302 19.3638 21.1302H5.36377C4.83334 21.1302 4.32463 20.9195 3.94956 20.5445C3.57448 20.1694 3.36377 19.6607 3.36377 19.1302V15.1302M17.3638 8.13025L12.3638 3.13025M12.3638 3.13025L7.36377 8.13025M12.3638 3.13025V15.1302\"\n    [attr.stroke]=\"color()\"\n    [attr.stroke-width]=\"strokeWidth()\"\n    stroke-linecap=\"round\""
  },
  {
    "selector": "app-url-modal",
    "className": "UrlModalComponent",
    "path": "pages/rateflow/flexfeedback/url-modal/url-modal.component.ts",
    "inputs": [],
    "snippet": "<div class=\"modal__container\">\n\n  <div class=\"modal__header\">\n    <button mat-icon-button mat-dialog-close class=\"btn--close\">\n      <img src=\"assets/close-modal-icon.svg\" alt=\"close-modal-icon\" />\n    </button>"
  },
  {
    "selector": "app-user-accordion",
    "className": "UserAccordionComponent",
    "path": "pages/usersettings/components/user-permissions/user-accordion/user-accordion.component.ts",
    "inputs": [],
    "snippet": "<div class=\"accordion-card\" [class]=\"'idx' + user().id\">\n  <input\n    [disabled]=\"!hasPermissions()\"\n    type=\"checkbox\"\n    [id]=\"user().id\"\n    (click)=\"toggle($event)\""
  },
  {
    "selector": "app-user-add-remove-message",
    "className": "UserAddRemoveMessageComponent",
    "path": "shared/model-based-components/conversation-messages/user-add-remove-message/user-add-remove-message.component.ts",
    "inputs": [
      "message"
    ],
    "snippet": "@if(messageType() === 'member_added'){\n  @if(activeUserName() && passiveUserName()){\n    <span>{{ 'user_add_leave_chat_message.member_added' | translate:{ active: activeUserName(), passive: passiveUserName() } }}</span>\n  }\n  @if(activeUserName() && !passiveUserName()){\n    <span>{{ 'user_add_leave_chat_message.user_joined' | translate:{ active: activeUserName() } }}</span>"
  },
  {
    "selector": "app-user-approve-icon",
    "className": "UserApproveIconComponent",
    "path": "shared/icons/user-approve-icon/user-approve-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  viewBox=\"0 0 20 20\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n>\n  <path"
  },
  {
    "selector": "app-user-context-form",
    "className": "UserContextFormComponent",
    "path": "pages/conversation/components/lupai-chat-bot/components/user-context-form/user-context-form.component.ts",
    "inputs": [],
    "snippet": "@if(isVisible()){\n<div class=\"user-context-overlay\" [class.show]=\"isVisible()\" @slideInUpOnEnter @slideOutDownOnLeave\n    (click)=\"onOverlayClick($event)\" (keydown.escape)=\"onClose()\" tabindex=\"0\" role=\"dialog\" aria-modal=\"true\"\n    aria-label=\"User context form\">\n\n    <div class=\"user-context-form\" "
  },
  {
    "selector": "app-user-icon",
    "className": "UserIconComponent",
    "path": "shared/icons/user-icon/user-icon.component.ts",
    "inputs": [],
    "snippet": "<svg viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M17.9254 19.0327V17.286C17.9254 16.3595 17.5573 15.471 16.9022 14.8158C16.2471 14.1607 15.3585 13.7927 14.432 13.7927H7.44526C6.51876 13.7927 5.63021 14.1607 4.97507 14.8158C4.31994 15.471 3.95189 16.3595 3.95189 17.286V19.0327M14.432 6.80591C14.432 8.73524 12.868 10.2993 10.9386 10.2993C9.0093 10.2993 7.44526 8.73524 7.44526 6.80591C7.44526 4.87657 9.0093 3.31253 10.9386 3.31253C12.868 3.31253 14.432 4.87657 14.432 6.80591Z\"\n    [attr.stroke]=\"color()\"\n    [attr.stroke-width]=\"strokeWidth()\"\n    stroke-linecap=\"round\""
  },
  {
    "selector": "app-user-info",
    "className": "UserInfoComponent",
    "path": "shared/components/user-info/user-info.component.ts",
    "inputs": [],
    "snippet": "<div class=\"user-info\" [ngClass]=\"{ 'user-info--right': isRight }\">\n  <ng-template [ngIf]=\"!isAnon\">\n    <ng-template [ngIf]=\"!loadedUser\">\n      <div class=\"loader-icon\">\n        <app-small-spinner\n          diameter=\"20\""
  },
  {
    "selector": "app-user-journey",
    "className": "UserJourneyComponent",
    "path": "pages/conversations/components/user-journey/user-journey.component.ts",
    "inputs": [],
    "snippet": "<div class=\"user-journey\">\n  <div class=\"user-journey__items\">\n    <ng-template\n      ngFor\n      let-journeyItem\n      [ngForOf]=\"journeyItems[feedbackPath$?.value]\""
  },
  {
    "selector": "app-user-management",
    "className": "UserManagementComponent",
    "path": "pages/usersettings/sections/user-management/user-management.component.ts",
    "inputs": [],
    "snippet": "<app-user-permissions [currentUser]=\"currentUser()\"></app-user-permissions>\n<!-- <app-organization-adjustments></app-organization-adjustments> -->"
  },
  {
    "selector": "app-user-management-icon",
    "className": "UserManagementIconComponent",
    "path": "shared/icons/user-management-icon/user-management-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n>\n  <path\n    d=\"M12.213 17.4745C12.213 15.9788 12.6565 14.5167 13.4875 13.2731C14.3184 12.0295 15.4995 11.0602 16.8813 10.4878C18.2632 9.91544 19.7837 9.76568 21.2506 10.0575C22.7176 10.3493 24.065 11.0695 25.1227 12.1271C26.1803 13.1847 26.9005 14.5322 27.1923 15.9991C27.4841 17.4661 27.3343 18.9866 26.762 20.3684C26.1896 21.7503 25.2203 22.9313 23.9767 23.7623C22.7331 24.5932 21.271 25.0368 19.7753 25.0368C17.7711 25.032 15.8504 24.2337 14.4332 22.8166C13.016 21.3994 12.2178 19.4787 12.213 17.4745ZM71.2242 25.0368C72.7199 25.0368 74.182 24.5932 75.4256 23.7623C76.6692 22.9313 77.6385 21.7503 78.2109 20.3684C78.7832 18.9866 78.933 17.4661 78.6412 15.9991C78.3494 14.5322 77.6292 13.1847 76.5716 12.1271C75.514 11.0695 74.1665 10.3493 72.6995 10.0575C71.2326 9.76568 69.7121 9.91544 68.3302 10.4878C66.9484 11.0602 65.7673 12.0295 64.9364 13.2731C64.1054 14.5167 63.6619 15.9788 63.6619 17.4745C63.6667 19.4787 64.4649 21.3994 65.8821 22.8166C67.2993 24.2337 69.22 25.032 71.2242 25.0368ZM45.4998 25.3833C47.3835 25.3833 49.2249 24.8247 50.7911 23.7782C52.3573 22.7317 53.5781 21.2442 54.2989 19.5039C55.0198 17.7636 55.2084 15.8486 54.8409 14.0011C54.4734 12.1536 53.5663 10.4565 52.2344 9.12453C50.9024 7.79255 49.2053 6.88546 47.3578 6.51797C45.5103 6.15048 43.5953 6.33909 41.855 7.05995C40.1147 7.78081 38.6272 9.00155 37.5807 10.5678C36.5342 12.134 35.9756 13.9754 35.9756 15.8591C35.9804 18.3836 36.9853 20.8034 38.7704 22.5885C40.5555 24.3736 42.9753 25.3785 45.4998 25.3833ZM66.8745 45.0245H87.4624C87.2215 41.9271 86.0996 38.9632 84.2291 36.4826C82.3587 34.002 79.8178 32.1081 76.9061 31.0244C73.9945 29.9408 70.8336 29.7125 67.7965 30.3667C64.7593 31.0208 61.9727 32.53 59.7652 34.7162C60.1316 35.017 60.4899 35.3292 60.84 35.6529C63.6059 38.221 65.6811 41.4439 66.8745 45.0245ZM30.1586 35.6529C30.5081 35.328 30.8664 35.0158 31.2334 34.7162C29.0259 32.5303 26.2393 31.0213 23.2023 30.3673C20.1653 29.7134 17.0047 29.9417 14.0932 31.0253C11.1817 32.109 8.64089 34.0027 6.7705 36.4832C4.90012 38.9636 3.7782 41.9273 3.53711 45.0245H24.125C25.3181 41.4439 27.393 38.2211 30.1586 35.6529ZM45.4998 31.6371C40.3351 31.6374 35.3606 33.5856 31.5695 37.0929C27.7784 40.6001 25.4496 45.4083 25.0482 50.5573H65.9514C65.5499 45.4083 63.2211 40.6001 59.43 37.0929C55.6389 33.5856 50.6644 31.6374 45.4998 31.6371ZM37.1839 55.8076C37.0907 55.6593 37.0384 55.489 37.0323 55.3139H31.9526C32.9378 58.1206 34.7704 60.552 37.1972 62.2721C39.624 63.9923 42.5252 64.9161 45.4998 64.9161C48.4743 64.9161 51.3755 63.9923 53.8023 62.2721C56.2291 60.552 58.0617 58.1206 59.0469 55.3139H53.9672C53.9611 55.489 53.9088 55.6593 53.8156 55.8076C52.9288 57.2111 51.7013 58.3674 50.2472 59.1687C48.7932 59.97 47.16 60.3902 45.4998 60.3902C43.8395 60.3902 42.2063 59.97 40.7523 59.1687C39.2982 58.3674 38.0707 57.2111 37.1839 55.8076ZM61.0873 55.5774C60.0243 58.8755 57.9426 61.7514 55.1417 63.7915C52.3407 65.8316 48.9649 66.9307 45.4998 66.9307C42.0346 66.9307 38.6588 65.8316 35.8578 63.7915C33.0569 61.7514 30.9752 58.8755 29.9122 55.5774C29.8861 55.4919 29.8713 55.4033 29.868 55.3139H10.9713V56.4763L20.5478 57.8164C21.0776 59.6408 21.8076 61.401 22.7244 63.0649L16.8993 70.7869L25.2692 79.1578L32.9913 73.3326C34.6553 74.2491 36.4155 74.9791 38.2398 75.5093L39.5808 85.0858H51.4187L52.7597 75.5093C54.5839 74.9787 56.344 74.2487 58.0082 73.3326L65.7303 79.1578L74.1002 70.7869L68.2751 63.0658C69.1918 61.4015 69.9217 59.641 70.4517 57.8164L80.0282 56.4763V55.3139H61.1315C61.1287 55.4034 61.1138 55.492 61.0873 55.5774ZM51.7021 55.3139H39.2992C40.0281 56.2664 40.9666 57.0382 42.0419 57.5693C43.1172 58.1005 44.3004 58.3768 45.4998 58.3768C46.6991 58.3768 47.8823 58.1005 48.9576 57.5693C50.0329 57.0382 50.9714 56.2664 51.7003 55.3139H51.7021Z\""
  },
  {
    "selector": "app-user-permissions",
    "className": "UserPermissionsComponent",
    "path": "pages/usersettings/components/user-permissions/user-permissions.component.ts",
    "inputs": [],
    "snippet": "<app-section-header [title]=\"'user_management_title' | translate\">\n  <app-user-management-icon></app-user-management-icon>\n</app-section-header>\n\n<app-filters\n  [activeUsersCount]=\"activeUsers().length\""
  },
  {
    "selector": "app-user-projects",
    "className": "UserProjectsComponent",
    "path": "pages/profile/rudimentary/user-projects/layout/user-projects.component.ts",
    "inputs": [],
    "snippet": "<div\n  class=\"cards-grid\"\n  *ngIf=\"userProjects$ | async as userProjects; else loaderTpl\"\n>\n  <p class=\"no-content\" *ngIf=\"!userProjects.length\">Nothing here for now</p>\n  <app-project-card-v2"
  },
  {
    "selector": "app-usersettings",
    "className": "UsersettingsComponent",
    "path": "pages/usersettings/usersettings.component.ts",
    "inputs": [],
    "snippet": "<div class=\"settings\">\n  <app-main-content-menu\n    [menuItems]=\"menuItems()\"\n    [preselectedItem]=\"createOrganisationPreselected()\"\n    (changeSelectedItem)=\"didSelectMenuItem($event)\"\n  ></app-main-content-menu>"
  },
  {
    "selector": "app-validation-errors",
    "className": "ValidationErrorsComponent",
    "path": "shared/UIkit/inputs/validation-errors/validation-errors.component.ts",
    "inputs": [
      "errorOrErrorsInput"
    ],
    "snippet": "<ul class=\"validation-errors_container\">\n  @for (error of castedErrors(); track error.message) {\n    <li>{{ error.message | translate:error.data }}</li>\n  }\n</ul>"
  },
  {
    "selector": "app-video-call-invite",
    "className": "VideoCallInviteComponent",
    "path": "shared/model-based-components/conversation-messages/video-call-invite/video-call-invite.component.ts",
    "inputs": [
      "isSender",
      "meet",
      "hostName"
    ],
    "snippet": "@if (meet()) {\n  <app-button\n    class=\"video-call-invite\"\n    btnUIType=\"primary\"\n    size=\"medium\"\n    [disabled]=\"meet().finished\""
  },
  {
    "selector": "app-view-file",
    "className": "ViewFileComponent",
    "path": "shared/components/view-file/view-file.component.ts",
    "inputs": [],
    "snippet": "<div class=\"modal-header\">\n  <div class=\"file-name\">{{ item.name }}</div>\n  <app-close-icon class=\"close-btn\" (click)=\"close()\"></app-close-icon>\n</div>\n<div class=\"modal-body\">\n  <div *ngIf=\"item.kind === 'audio'\">"
  },
  {
    "selector": "app-visibility-hidden-icon",
    "className": "VisibilityHiddenIconComponent",
    "path": "shared/icons/visibility-hidden-icon/visibility-hidden-icon.component.ts",
    "inputs": [],
    "snippet": "<svg\n  viewBox=\"0 0 20 20\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n>\n  <g clip-path=\"url(#clip0_6281_5485)\">"
  },
  {
    "selector": "app-visible-menu-button",
    "className": "VisibleMenuButtonComponent",
    "path": "shared/UIkit/buttons/visible-menu-button/visible-menu-button.component.ts",
    "inputs": [],
    "snippet": "<button\n  class=\"visible-menu-button\"\n  [ngClass]=\"{\n    'visible-menu-button_selected': selected(),\n    'visible-menu-button_disabled': menuItem().disabled\n  }\""
  },
  {
    "selector": "app-visible-menu-items-container",
    "className": "VisibleMenuItemsContainerComponent",
    "path": "main-content-menu/components/visible-menu-items-container/visible-menu-items-container.component.ts",
    "inputs": [
      "visibleItems",
      "selectedItem",
      "displayDropdownBtn",
      "dropdownIsActive"
    ],
    "snippet": "<div class=\"visible-menu-items-container\">\n  @for (menuItem of visibleItems(); track menuItem.param) {\n    <app-visible-menu-button\n      [menuItem]=\"menuItem\"\n      [selected]=\"isSelected(menuItem)\"\n      (click)=\"clickItemHandler(menuItem)\""
  },
  {
    "selector": "app-we-care-icon",
    "className": "WeCareIconComponent",
    "path": "shared/icons/we-care-icon/we-care-icon.component.ts",
    "inputs": [],
    "snippet": "<svg viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g clip-path=\"url(#clip0_3647_29374)\">\n    <path d=\"M48 15.4838C48 8.22647 42.1173 2.34325 34.86 2.34325C30.6797 2.34325 26.9612 4.29985 24.5558 7.34238L24.4844 7.37403C22.2559 5.15469 19.7355 3.85397 17.4313 3.08735C17.4419 3.08111 17.451 3.072 17.4615 3.06577C16.1239 2.60359 14.6932 2.34277 13.1974 2.34277C5.93961 2.34325 0.0559082 8.22599 0.0559082 15.4838C0.0559082 16.8224 0.259671 18.113 0.631237 19.3303C0.633635 19.327 0.63747 19.3236 0.641306 19.3203C1.68361 23.0599 3.82527 25.4072 4.49409 25.985L7.33382 28.6996L7.50306 28.8635L7.32663 29.0443C6.47323 29.9169 6.49192 31.3163 7.36498 32.1678C8.23757 33.0198 9.63562 33.003 10.4885 32.1309L10.6722 31.9487C10.6928 31.931 10.7182 31.9195 10.747 31.9195C10.8141 31.9195 10.8673 31.9722 10.8673 32.0403C10.8673 32.0681 10.8563 32.0916 10.84 32.1127L10.8424 32.1146L10.6669 32.2949C9.81301 33.1675 9.83171 34.567 10.7048 35.4175C11.5778 36.2709 12.9759 36.2546 13.8288 35.3801L14.0014 35.2104C14.023 35.1845 14.0551 35.1672 14.0915 35.1672C14.1591 35.1672 14.2124 35.22 14.2124 35.2876C14.2124 35.3168 14.2009 35.3427 14.1826 35.3633L14.1831 35.3643L14.1802 35.3671C14.1778 35.3695 14.1759 35.3734 14.173 35.3753L14.0067 35.545C13.1533 36.4171 13.1715 37.8166 14.0446 38.6681C14.9181 39.5205 16.3161 39.5042 17.1686 38.6317L17.3489 38.4461L17.3522 38.4499C17.3728 38.4341 17.3978 38.4226 17.4251 38.4226C17.4922 38.4226 17.5459 38.4758 17.5459 38.5434C17.5459 38.5703 17.5354 38.5933 17.52 38.6134L17.5215 38.6149L17.5119 38.6249C17.5104 38.6269 17.509 38.6278 17.5076 38.6302L17.3455 38.7966C16.4921 39.6692 16.5103 41.0682 17.3834 41.9201C18.2564 42.7726 19.6555 42.7558 20.5074 41.8823L20.7155 41.6694L20.6565 41.7456L23.5936 44.5417C24.3847 45.2935 25.4188 45.7077 26.5071 45.7077H26.5632C27.7139 45.6919 28.7845 45.224 29.5775 44.3907C30.3465 43.5809 30.7583 42.4782 30.7219 41.341C30.7679 41.3429 30.8164 41.3448 30.8744 41.3429C32.0226 41.3295 33.0908 40.862 33.8838 40.0287C34.65 39.2228 35.0556 38.1709 35.0354 37.0466C35.0863 37.0481 35.151 37.05 35.208 37.05C36.3573 37.0346 37.4278 36.5672 38.2208 35.7339C38.9913 34.9232 39.4031 33.8214 39.3662 32.6837C39.4123 32.6856 39.4755 32.688 39.5177 32.6866C40.667 32.6717 41.7361 32.2038 42.5281 31.3705C43.9847 29.843 44.0614 27.4995 42.8081 25.8718C45.8674 23.4645 48 19.6731 48 15.4838ZM40.8165 29.7419C40.4771 30.0986 39.9828 30.3028 39.4588 30.3028C38.9664 30.3028 38.5099 30.1269 38.1753 29.808L35.0762 26.9141C34.8796 26.7693 34.638 26.6811 34.3743 26.6811C33.717 26.6811 33.1834 27.2157 33.1834 27.874C33.1834 28.2537 33.3651 28.5898 33.6441 28.8079L36.4421 31.4611C37.1881 32.1721 37.2183 33.3573 36.5088 34.1033C36.1693 34.4615 35.6745 34.6662 35.1505 34.6662C34.6591 34.6662 34.2027 34.4907 33.8675 34.1709L30.8763 31.2981L30.8748 31.301C30.662 31.1068 30.381 30.9841 30.0703 30.9841C29.413 30.9841 28.8789 31.5187 28.8789 32.1779C28.8789 32.4953 29.0055 32.7825 29.2088 32.9973L29.2054 33.0001L32.1104 35.7622C32.8487 36.4732 32.876 37.6574 32.1717 38.4001C31.8323 38.7558 31.338 38.9606 30.8135 38.9606C30.3206 38.9606 29.8651 38.7846 29.531 38.4663L26.5781 35.6793L26.5762 35.6817C26.3609 35.4621 26.0608 35.3254 25.729 35.3254C25.0707 35.3254 24.5376 35.8595 24.5376 36.5188C24.5376 36.8668 24.6891 37.1751 24.9264 37.3937L27.7968 40.1203C28.5424 40.8313 28.5726 42.0175 27.864 42.7635C27.525 43.1202 27.0297 43.3254 26.5057 43.3254C26.0128 43.3254 25.5579 43.1504 25.2227 42.8301L22.2991 40.0479L22.4741 39.8696C23.3275 38.996 23.3088 37.5961 22.4353 36.7441C21.5627 35.8917 20.1651 35.9089 19.3107 36.781L19.2105 36.8831L19.2077 36.8793C19.1856 36.9042 19.1544 36.9201 19.1175 36.9201C19.0514 36.9201 18.9986 36.8668 18.9986 36.8007C18.9986 36.7623 19.0164 36.7297 19.0437 36.7077L19.1333 36.6175C19.9867 35.744 19.968 34.3445 19.095 33.493C18.2224 32.6391 16.8239 32.6573 15.97 33.5309L15.8655 33.6378L15.8631 33.6359C15.8425 33.6512 15.8175 33.6637 15.7897 33.6637C15.7236 33.6637 15.6699 33.61 15.6699 33.5434C15.6699 33.516 15.6799 33.4925 15.6958 33.4724L15.6938 33.4705L15.7039 33.4604C15.7053 33.4585 15.7063 33.4566 15.7077 33.4556L15.7945 33.3664C16.6474 32.4924 16.6297 31.0939 15.7557 30.241C14.8826 29.389 13.4855 29.4063 12.6307 30.2784L12.5171 30.3877C12.4955 30.4169 12.4624 30.4371 12.4231 30.4371C12.3569 30.4371 12.3032 30.3824 12.3032 30.3167C12.3032 30.2788 12.3219 30.2462 12.3493 30.2251L12.4547 30.1163C13.3067 29.2428 13.2894 27.8438 12.4154 26.9908C11.5428 26.1384 10.1453 26.1566 9.2909 27.0292L9.17679 27.1452L6.10214 24.166C6.07193 24.1396 3.81425 22.1552 2.76667 17.8441C2.77482 17.8412 2.78249 17.8369 2.79064 17.834C2.61948 17.0765 2.52071 16.2916 2.52071 15.4833C2.52071 9.59767 7.30841 4.80998 13.195 4.80998C14.0709 4.80998 14.9191 4.92792 15.7346 5.1288C15.7351 5.12785 15.7355 5.12641 15.7355 5.12641C17.8254 5.70078 20.2116 6.75219 22.324 8.68194L11.4585 19.4411V19.4416C11.0174 19.8568 10.7379 20.4421 10.7379 21.0956C10.7379 22.3542 11.7576 23.3735 13.0147 23.3735C13.0785 23.3735 13.1384 23.3595 13.2017 23.3538C13.2031 23.3581 13.2051 23.3605 13.207 23.3639C13.2559 23.3581 13.3053 23.3466 13.3551 23.3389C13.4151 23.3293 13.4731 23.3202 13.532 23.3092C15.34 22.9511 18.7507 19.3207 21.8551 17.3771C23.606 16.2969 24.6503 15.9551 26.5709 15.9551C28.1713 15.9551 29.6259 16.5616 30.7305 17.5516C30.8629 17.6499 31.0019 17.7697 31.1572 17.9227L37.8004 24.3012L37.7985 24.3069L40.6866 27.0728C41.4345 27.7833 41.5252 28.9968 40.8165 29.7419Z\" [attr.fill]=\"fill()\"/>\n  </g>\n  <defs>\n    <clipPath id=\"clip0_3647_29374\">"
  },
  {
    "selector": "app-weblinks",
    "className": "WeblinksComponent",
    "path": "pages/profile/rudimentary/weblinks/layout/weblinks.component.ts",
    "inputs": [],
    "snippet": "<ng-container *ngIf=\"webLinks; else loaderTpl\">\n  <div class=\"profile-weblinks\">\n    <app-weblinks-item\n      *ngFor=\"let webLink of webLinks\"\n      [webLink]=\"webLink\"\n      [isAuthUser]=\"isAuthUser\""
  },
  {
    "selector": "app-weblinks-item",
    "className": "WeblinksItemComponent",
    "path": "pages/profile/rudimentary/weblinks/weblinks-item/weblinks-item.component.ts",
    "inputs": [],
    "snippet": "<div *ngIf=\"isAuthUser\" class=\"card\">\n  <div class=\"card__header\">\n    <div class=\"card__button\">\n      <app-gt-switch\n        (didChangeEvent)=\"webLink.active = !webLink.active\"\n        [small]=\"true\""
  },
  {
    "selector": "app-week",
    "className": "WeekComponent",
    "path": "pages/usersettings/sections/scheduling/week/week.component.ts",
    "inputs": [],
    "snippet": "<div class=\"schedule\">\n  <span\n    *ngFor=\"let item of result\"\n    class=\"schedule__item\"\n    [ngClass]=\"{ 'schedule__item--bold': item.status }\"\n    >{{ item.name }}</span"
  },
  {
    "selector": "app-welcome-animation",
    "className": "WelcomeAnimationComponent",
    "path": "pages/why/welcome-animation/welcome-animation.component.ts",
    "inputs": [],
    "snippet": "<div class=\"animation-card\" #cardRef></div>"
  },
  {
    "selector": "app-welcome-animation-2",
    "className": "WelcomeAnimation2Component",
    "path": "pages/why/welcome-animation-2/welcome-animation-2.component.ts",
    "inputs": [],
    "snippet": "<div #cardRef class=\"animation-card\">\n  <div class=\"body\">\n    <a\n      class=\"button\"\n      routerLink=\"/auth\"\n      [queryParams]=\"{ mode: 'signup', portfolio: true }\""
  },
  {
    "selector": "app-welcome-animation-3",
    "className": "WelcomeAnimation3Component",
    "path": "pages/why/welcome-animation-3/welcome-animation-3.component.ts",
    "inputs": [],
    "snippet": "<div #cardRef class=\"animation-card\">\n  <div class=\"body\" #bodyRef>\n    <img src=\"assets/why/welcome-3.svg\" alt=\"\" #imgRef />\n  </div>\n  <div class=\"footer\" #footerRef></div>\n</div>"
  },
  {
    "selector": "app-welcome-card",
    "className": "WelcomeCardComponent",
    "path": "pages/newsfeed/welcome-card/welcome-card.component.ts",
    "inputs": [],
    "snippet": "<div id=\"welcome-card\" class=\"welcome-card\"></div>"
  },
  {
    "selector": "app-welcome-card",
    "className": "WelcomeCardComponent",
    "path": "shared/complex-ui-components/welcome-card/welcome-card.component.ts",
    "inputs": [],
    "snippet": "<div class=\"welcome-card_header\">\n  {{ 'welcome_card.access' | translate }}\n  <app-aimed-heart-icon\n    class=\"welcome-card_header-icon\"\n  ></app-aimed-heart-icon>\n  {{ 'welcome_card.filter' | translate }}"
  },
  {
    "selector": "app-why",
    "className": "WhyComponent",
    "path": "pages/why/why.component.ts",
    "inputs": [],
    "snippet": "<div class=\"why\" #pageRef>\n  <!-- <app-main-content-menu\n    [menuItems]=\"menuItems\"\n    (changeSelectedItem)=\"didSelectMenuItem($event)\"\n  ></app-main-content-menu> -->\n"
  },
  {
    "selector": "app-whycard",
    "className": "WhycardComponent",
    "path": "pages/why/whycard/whycard.component.ts",
    "inputs": [],
    "snippet": "<div\n  class=\"whycard {{ card.className }} {{ card.type }}\"\n  [style.backgroundColor]=\"card.backgroundColor\"\n  [ngClass]=\"{\n    'whycard--height-unset-small':\n      card.type === cardTypes.how_intro_card ||"
  },
  {
    "selector": "app-x-icon",
    "className": "XIconComponent",
    "path": "shared/icons/x-icon/x-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\">\n  <path d=\"M14.2736 10.5849L23.2021 0.421387H21.0871L13.3312 9.24443L7.14113 0.421387H-0.00012207L9.36248 13.7647L-0.00012207 24.4214H2.11492L10.3001 15.102L16.8386 24.4214H23.9799M2.87828 1.98329H6.12757L21.0855 22.9362H17.8354\" fill=\"#1E1E1E\"/>\n</svg>"
  },
  {
    "selector": "app-yes-no-question-reply",
    "className": "YesNoQuestionReplyComponent",
    "path": "shared/model-based-components/conversation-messages/reply-messages/yes-no-question-reply/yes-no-question-reply.component.ts",
    "inputs": [
      "initialMessage",
      "messageText"
    ],
    "snippet": "<span class=\"highlighted-reply\">\n  @if(answerId() === 1){\n    <app-check-icon [fill]=\"'#1E1E1E'\"></app-check-icon>\n  }\n  <span>{{getOptionValue() | translate}}</span>\n  @if(answerId() === 2){"
  },
  {
    "selector": "app-youtube-icon",
    "className": "YoutubeIconComponent",
    "path": "shared/icons/youtube-icon/youtube-icon.component.ts",
    "inputs": [],
    "snippet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" viewBox=\"0 0 25 25\" fill=\"none\">\n  <g clip-path=\"url(#clip0_6165_3907)\">\n    <path d=\"M20.5949 3.60539C16.9909 3.35939 8.96386 3.36039 5.36486 3.60539C1.46786 3.87139 1.00886 6.22539 0.979858 12.4214C1.00886 18.6064 1.46386 20.9704 5.36486 21.2374C8.96486 21.4824 16.9909 21.4834 20.5949 21.2374C24.4919 20.9714 24.9509 18.6174 24.9799 12.4214C24.9509 6.23639 24.4959 3.87239 20.5949 3.60539ZM9.97986 16.4214V8.42139L17.9799 12.4144L9.97986 16.4214Z\" fill=\"#1E1E1E\"/>\n  </g>\n  <defs>\n    <clipPath id=\"clip0_6165_3907\">"
  },
  {
    "selector": "crystal-lightbox",
    "className": "LightboxComponent",
    "path": "vendor/lightbox/lib/lightbox.component.ts",
    "inputs": [],
    "snippet": "<div class=\"lightbox-counter\" *ngIf=\"properties.counter && images.length > 1\">\n  {{ counter }}\n</div>\n<div class=\"lightbox-close\" *ngIf=\"!simpleMode\" (click)=\"closeLightbox()\">\n  {{ closeButtonText }}\n</div>"
  },
  {
    "selector": "lightbox-common",
    "className": "LightboxCommonComponent",
    "path": "vendor/lightbox/lib/lightbox-common.component.ts",
    "inputs": [],
    "snippet": ""
  }
];