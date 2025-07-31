export default function ServicesHome() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>Our Services</h1>
      <img className='back' src="https://th.bing.com/th/id/R.757dcae10509bdbcbbbe7231f9cec8ab?rik=7RO2A7Du7jYBww&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fleft-arrow-png-left-icon-1600.png&ehk=nQr%2fWbRJHtKEaV53ijq71OpNptgpG4FZxnChrIO0fBI%3d&risl=&pid=ImgRaw&r=0" onClick={()=>window.location.href='/'}height="50px"/>
      <ul>
         
      
        <Link href="/services/cybersecurity/">Cyber Security</Link>
      <Link href="/services/seo/">SEO</Link>
        <Link href="/services/web-development/">Web Development</Link>
        
       </ul>
    </div>
  );
}
