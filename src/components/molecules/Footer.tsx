import React from 'react'
import LinkContainerLayout from 'components/layouts/LinkContainerLayout'
import FooterLink from 'components/atoms/FooterLink'

const Footer: React.FC = (): React.ReactElement => {
  return (
    <footer>
      <section className="flex flex-row justify-between bg-grey-600 text-grey-50 px-32 py-20">
        <div className="flex justify-between w-2/5">
          <LinkContainerLayout title="Platform">
            <FooterLink to="">Guidelines</FooterLink>
            <FooterLink to="">FAQ</FooterLink>
            <FooterLink to="">Lists</FooterLink>
          </LinkContainerLayout>
          <LinkContainerLayout title="Company">
            <FooterLink to="">Security</FooterLink>
            <FooterLink to="">Legal</FooterLink>
            <FooterLink to="">Contact</FooterLink>
          </LinkContainerLayout>
          <LinkContainerLayout title="Developer">
            <FooterLink to="https://github.com/HackerNews/API">API</FooterLink>
          </LinkContainerLayout>
        </div>
        <div className="flex flex-col font-semibold">
          <span>335 Pioneer Way</span>
          <span>Mountain View, CA 94041</span>
          <a href="mailto:hn@ycombinator.com" className="mt-6 duration-150 hover:text-teal-300">
            hn@ycombinator.com
          </a>
        </div>
      </section>
      <section className="flex justify-center py-2 bg-grey-50">&copy; 2021 Florian Bühler</section>
    </footer>
  )
}

export default Footer
