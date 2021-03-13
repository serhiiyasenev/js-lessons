const setCookie = (name, value, options = {}) => {
    const secure = options.secure;
    const path = options.path;
    const domain = options.domain;
    const expires = options.expires;

    console.log('name:', name);
    console.log('value:', value);

    console.log('secure:', secure);
    console.log('path:', path);
    console.log('domain:', domain);
    console.log('expires:', expires);

    console.log('options:', options);
};

setCookie('type', 'js', {
    secure: true,
    expires: 30000,
});