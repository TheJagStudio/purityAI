import React from 'react'

const Footer = () => {
     return (
          <footer class="mb-5 flex w-full flex-col items-center">
               <div class="mb-10 h-[1px] w-[95%] bg-gray-300 dark:bg-gray-600 md:w-[80%]"></div>
               <div class="mx-4 grid grid-cols-2 gap-16 text-xs md:grid-cols-4">
                    <section class="flex flex-col">
                         <h6 class="mb-6 font-bold dark:text-gray-600">ClipDrop</h6>
                         <a class="my-1 cursor-pointer font-semibold text-gray-900 hover:opacity-50 dark:text-gray-200" href="/">Home</a><a class="my-1 cursor-pointer font-semibold text-gray-900 hover:opacity-50 dark:text-gray-200" href="https://forms.gle/juMc7NJ8warc6SXw8">Affiliate Program</a><a class="my-1 cursor-pointer font-semibold text-gray-900 hover:opacity-50 dark:text-gray-200" href="https://stability.ai/">Stability.ai</a>
                    </section>
                    <section class="flex flex-col">
                         <h6 class="mb-6 font-bold dark:text-gray-600">Support</h6>
                         <a class="my-1 cursor-pointer font-semibold text-gray-900 hover:opacity-50 dark:text-gray-200">Contact us</a><a class="my-1 cursor-pointer font-semibold text-gray-900 hover:opacity-50 dark:text-gray-200" href="https://clipdrop.co/help">Help</a>
                    </section>
                    <section class="flex flex-col">
                         <h6 class="mb-6 font-bold dark:text-gray-600">Legal</h6>
                         <a class="my-1 cursor-pointer font-semibold text-gray-900 hover:opacity-50 dark:text-gray-200" href="/privacy">Privacy</a><a class="my-1 cursor-pointer font-semibold text-gray-900 hover:opacity-50 dark:text-gray-200" href="/terms-visitor">Terms of Use</a><a class="my-1 cursor-pointer font-semibold text-gray-900 hover:opacity-50 dark:text-gray-200" href="/legal-notice">Legal notice</a><a class="my-1 cursor-pointer font-semibold text-gray-900 hover:opacity-50 dark:text-gray-200" href="/cookies">Cookie Use</a><a class="termly-cookie-preference-button my-1 cursor-pointer font-semibold text-gray-900 hover:opacity-50 dark:text-gray-200">Cookies preferences</a>
                    </section>
                    <section class="flex flex-col">
                         <h6 class="mb-6 font-bold dark:text-gray-600">Social</h6>
                         <a class="my-1 flex cursor-pointer items-center gap-4 font-semibold text-gray-900 hover:opacity-50 dark:text-gray-200" href="https://community.clipdrop.co/"
                         ><svg width="16" height="16" viewBox="0 0 2447.6 2452.5" xmlns="http://www.w3.org/2000/svg">
                                   <g clip-rule="evenodd" fill-rule="evenodd">
                                        <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="currentcolor"></path>
                                        <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="currentcolor"></path>
                                        <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="currentcolor"></path>
                                        <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="currentcolor"></path>
                                   </g></svg
                              >Join our slack community</a
                         ><a class="my-1 flex cursor-pointer items-center gap-4 font-semibold text-gray-900 hover:opacity-50 dark:text-gray-200" href="https://twitter.com/clipdropapp"
                         ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>Twitter</a
                         ><a class="my-1 flex cursor-pointer items-center gap-4 font-semibold text-gray-900 hover:opacity-50 dark:text-gray-200" href="https://www.producthunt.com/posts/ar-copy-paste"
                         ><svg xmlns="http://www.w3.org/2000/svg" class="overflow-visible" viewBox="0 0 26.245 26.256" width="16" height="16">
                                   <path d="M26.254 13.128c0 7.253-5.875 13.128-13.128 13.128S-.003 20.382-.003 13.128 5.872 0 13.125 0s13.128 5.875 13.128 13.128" fill="transparent" stroke="currentcolor" stroke-width="1"></path>
                                   <path d="M14.876 13.128h-3.72V9.2h3.72c1.083 0 1.97.886 1.97 1.97s-.886 1.97-1.97 1.97m0-6.564H8.53v13.128h2.626v-3.938h3.72c2.538 0 4.595-2.057 4.595-4.595s-2.057-4.595-4.595-4.595" fill="currentcolor"></path></svg
                              >Product Hunt</a
                         ><a class="my-1 flex cursor-pointer items-center gap-4 font-semibold text-gray-900 hover:opacity-50 dark:text-gray-200" href="https://instagram.com/clipdropapp"
                         ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>Instagram</a
                         ><a class="my-1 flex cursor-pointer items-center gap-4 font-semibold text-gray-900 hover:opacity-50 dark:text-gray-200" href="https://github.com/initml"
                         ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>Github</a
                         >
                    </section>
               </div>
               <div class="mt-7 text-xs text-gray-900 dark:text-gray-200">
                    Copyright
                    {/* <!-- -->2023<!-- --> */}
                    © Init ML
               </div>
          </footer>

     )
}

export default Footer