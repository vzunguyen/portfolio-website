import React from "react";

export default function Footer() {
    return (
        <footer
            className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-4">
            <div className="flex mt-4 justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                <a href="mailto:vandu7124@gmail.com"
                   className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         viewBox="0 0 24 24">
                        <path
                            d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                        <path
                            d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                        <span className="sr-only">Mail account</span>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/du-van-nguyen-4209912b5/"
                   className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         viewBox="2 2 21 21">
                        <path fill-rule="evenodd"
                              d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                              clip-rule="evenodd"/>
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                    </svg>
                    <span className="sr-only">LinkedIn page</span>
                </a>
                <a href="https://github.com/vzunguyen"
                   className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                         viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                              clip-rule="evenodd"/>
                    </svg>
                    <span className="sr-only">GitHub account</span>
                </a>
            </div>
            <div className="flex items-center justify-center text-sm font-medium text-white p-3">
              <span className="text-sm text-gray-500  sm:text-center  dark:text-gray-400">
                This was made by @vzunguyen.
              </span>
            </div>
        </footer>
    );
}