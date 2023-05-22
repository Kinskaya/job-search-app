export const appSecretKey = `v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948`;

export const register = async () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('x-secret-key', `GEU4nvd3rej*jeh.eqp`);
  const response = await fetch(
    `https://startup-summer-proxy-production.up.railway.app/2.0/oauth2/password/?login=sergei.stralenia@gmail.com&password=paralect123
      &client_id=2356&client_secret=${appSecretKey}&hr=0`,
    {
      headers: myHeaders,
    })
  const result = await response.json();
  localStorage.setItem("access_token",  result['access_token']);
}
register();
