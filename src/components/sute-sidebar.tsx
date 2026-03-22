"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { SITE_NAV_ITEMS } from "@/data/site-config";
import { CONTACT_INFO } from "@/data/site-content";

type SiteSidebarProps = {
  logoSrc: string;
  logoAlt: string;
  companyName?: string;
};

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav aria-label="Section navigation" className="flex flex-col gap-3">
      {SITE_NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => {
            scrollToSection(item.id);
            onNavigate?.();
          }}
          className="text-left text-base font-medium text-walnut transition-colors hover:text-espresso cursor-pointer"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

export function ContactButton({ size = 'default' }: { size?: 'default' | 'lg' }) {
  return (
    <Button asChild className="w-full" size={size}>
      <a href={`mailto:${CONTACT_INFO.email}`}>Contact</a>
    </Button>
  );
}

function SidebarBrand({ logoSrc, logoAlt, companyName }: SiteSidebarProps) {
  return (
    <div className="flex items-center gap-3 py-2 px-4">
      <div className="relative h-10 w-10 overflow-hidden bg-cream">
        <Image
          src={logoSrc}
          alt={logoAlt}
          fill
          className="object-contain"
          sizes="40px"
          priority
          unoptimized
        />
      </div>

      {companyName ? (
        <span className="text-lg font-semibold tracking-wide text-espresso">
          {companyName}
        </span>
      ) : null}
    </div>
  );
}

export function SiteSidebar({
  logoSrc,
  logoAlt,
  companyName,
}: SiteSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-72 lg:flex-col lg:border-r bg-cream">
        <div className="flex h-full flex-col">
          <SidebarBrand
            logoSrc={logoSrc}
            logoAlt={logoAlt}
            companyName={companyName}
          />

          <Separator />

          <div className="flex-1 small_circle_gradient py-4 p-3">
            <SidebarNav />
          </div>

          <div className="pt-6 pb-6 px-4">
            <ContactButton />
          </div>
        </div>
      </aside>

      <div className="sticky top-0 z-40 border-b bg-cream/95 backdrop-blur lg:hidden small_circle_gradient">
        <div className="flex items-center justify-between px-4 py-3">
          <SidebarBrand
            logoSrc={logoSrc}
            logoAlt={logoAlt}
            companyName={companyName}
          />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-75 sm:w-85">
              <SheetHeader className="pb-4">
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>

              <div className="flex h-full flex-col small_circle_gradient py-4 px-4">
                <SidebarNav onNavigate={() => setIsOpen(false)} />

                <div className="mt-6">
                  <ContactButton />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}
