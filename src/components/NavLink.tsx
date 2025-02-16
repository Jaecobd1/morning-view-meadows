function NavLink({ href, active, children }: any) {
  return (
    <div>
      <a
        href={href}
        className={
          active
            ? "text-amber-300 underline"
            : "text-gray-500 hover:underline hover:text-amber-300"
        }
      >
        {children}
      </a>
    </div>
  );
}

export default NavLink;
