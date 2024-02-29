import { Container, Text, SocialIcons } from "./Elements"

const Footer = () => {
  return (
    <footer className="section-fluid">
      <div className="section-inner">
        <Container>
          <Text>Copyright	&#169; Compured, 2023, Av. Arrayanes 282 - Local 2, Villa La Angostura, Neuquén.</Text>
          <SocialIcons>
            <svg stroke="var(--text-light)" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <svg stroke="var(--text-light)" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </SocialIcons>
        </Container>
      </div>
    </footer>
  )
}

export default Footer