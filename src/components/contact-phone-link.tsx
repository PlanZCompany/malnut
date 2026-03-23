type ContactPhoneLinkProps = {
  className?: string;
  children?: React.ReactNode;
};

const PHONE_DISPLAY = "+356 99794877";
const PHONE_HREF = "tel:+35699794877";

export function ContactPhoneLink({
  className,
  children,
}: ContactPhoneLinkProps) {
  return (
    <a href={PHONE_HREF} className={className}>
      {children ?? PHONE_DISPLAY}
    </a>
  );
}
