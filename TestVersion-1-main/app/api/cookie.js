export default (req, res) => {
    const cookies = req.headers.cookie || '';
  
    // Parse the cookies into an object
    const cookieObject = cookies
      .split('; ')
      .map(cookie => cookie.split('='))
      .reduce((acc, [name, value]) => {
        acc[name] = decodeURIComponent(value);
        return acc;
      }, {});
  
    // Access a specific cookie
    const appSessionCookie = cookieObject.appSession;
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ appSession: appSessionCookie });
  };