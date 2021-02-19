import React from 'react'
import LinkContainerLayout from 'components/layouts/LinkContainerLayout'

const Footer: React.FC = (): React.ReactElement => {
  const linkClasses = 'text-grey-50 px-1 py-2 font-semibold'

  return (
    <footer>
      <section className="flex flex-row justify-between bg-grey-600 px-32 py-20">
        <div className="flex justify-between w-1/3">
          <LinkContainerLayout>
            <a href="" className={linkClasses}>
              Guidelines
            </a>
            <a href="" className={linkClasses}>
              FAQ
            </a>
            <a href="" className={linkClasses}>
              Lists
            </a>
          </LinkContainerLayout>
          <LinkContainerLayout>
            <a href="https://github.com/HackerNews/API" className={linkClasses}>
              API
            </a>
          </LinkContainerLayout>
          <LinkContainerLayout>
            <a href="" className={linkClasses}>
              Security
            </a>
            <a href="" className={linkClasses}>
              Legal
            </a>
            <a href="" className={linkClasses}>
              Contact
            </a>
          </LinkContainerLayout>
        </div>
        <div>
          <h5>Hacker News</h5>
        </div>
      </section>
      <section className="flex justify-center py-2 bg-grey-50">&copy; 2021 Florian Bühler</section>
    </footer>
  )
}

export default Footer
