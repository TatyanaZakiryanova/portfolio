export const scrollToSection = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  targetId: string,
) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  const navbarHeight = document.querySelector('nav')?.clientHeight || 0;

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - navbarHeight,
      behavior: 'smooth',
    });
  }
};
