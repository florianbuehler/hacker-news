import React from 'react'

const Footer: React.FC = (): React.ReactElement => {
  return (
    <footer>
      <section>some content</section>
      <section className="flex justify-center py-2 bg-grey-50">&copy; 2021 Florian Bühler</section>
    </footer>
  )
}

export default Footer
