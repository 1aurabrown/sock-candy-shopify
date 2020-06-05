export default function supportsCookies() {
  if (navigator.cookieEnabled) return true

  // set and read cookie
  document.cookie = "cookietest=1";
  var ret = document.cookie.indexOf("cookietest=") != -1

  // delete cookie
  document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT"

  return ret
}