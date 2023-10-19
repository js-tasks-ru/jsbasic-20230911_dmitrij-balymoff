function checkSpam(str) {
  if ( str.toLowerCase().search('xxx') >= 0 || str.toLowerCase().search('1xbet') >= 0 ) {
    return true;
  }
  return false;
}
