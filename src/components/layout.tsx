import * as React from 'react';
import { Link, PageProps } from 'gatsby';

interface LayoutProps extends PageProps {
  title: string | undefined | null;
}

const Layout = ({ location, title, children }: LayoutProps) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} @mishitoshi
        {' '}
        All Rights Reserved
      </footer>
    </div>
  );
};

export default Layout;
