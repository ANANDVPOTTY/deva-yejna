/*-------| Responsive Font Size Tokens |-------*/
export const FONT_SIZES = {
  "80px": { xs: "56px", sm: "62px", md: "68px", lg: "74px", xl: "80px" },
  "60px": { xs: "32px", sm: "40px", md: "48px", lg: "54px", xl: "60px" },
  "52px": { xs: "28px", sm: "34px", md: "40px", lg: "46px", xl: "52px" },
  "48px": { xs: "26px", sm: "32px", md: "38px", lg: "44px", xl: "48px" },
  "42px": { xs: "24px", sm: "30px", md: "34px", lg: "38px", xl: "42px" },
  "40px": { xs: "24px", sm: "28px", md: "32px", lg: "36px", xl: "40px" },
  "36px": { xs: "22px", sm: "26px", md: "30px", lg: "34px", xl: "36px" },
  "32px": { xs: "20px", sm: "24px", md: "28px", lg: "30px", xl: "32px" },
  "30px": { xs: "18px", sm: "22px", md: "26px", lg: "28px", xl: "30px" },
  "28px": { xs: "18px", sm: "20px", md: "24px", lg: "26px", xl: "28px" },
  "26px": { xs: "18px", sm: "20px", md: "22px", lg: "24px", xl: "26px" },
  "24px": { xs: "16px", sm: "18px", md: "20px", lg: "22px", xl: "24px" },
  "22px": { xs: "16px", sm: "18px", md: "20px", lg: "22px", xl: "22px" },
  "20px": { xs: "14px", sm: "16px", md: "18px", lg: "20px", xl: "20px" },
  "18px": { xs: "14px", sm: "14px", md: "16px", lg: "18px", xl: "18px" },
  "16px": { xs: "12px", sm: "14px", md: "14px", lg: "16px", xl: "16px" },
  "14px": { xs: "12px", sm: "12px", md: "14px", lg: "14px", xl: "14px" },
  "12px": { xs: "10px", sm: "10px", md: "12px", lg: "12px", xl: "12px" },
  "10px": { xs: "8px", sm: "8px", md: "10px", lg: "10px", xl: "10px" },
  "8px": { xs: "8px", sm: "8px", md: "8px", lg: "8px", xl: "8px" },
};

/*-------| Breakpoint-Aware Font Scaling (Hybrid Fixed + Fluid) |-------*/
export const responsiveFont = (theme, size) => {
  const s = FONT_SIZES[size];

  return {
    /*-------| XS: Mobile screens (<600px) |-------*/
    [theme.breakpoints.down("sm")]: {
      fontSize: s.xs,
    },

    /*-------| SM: Small devices (600px–899px) |-------*/
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: s.sm,
    },

    /*-------| MD: Tablets & small laptops (900px–1199px) |-------*/
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: s.md,
    },

    /*-------| LG: Large screens with fluid scaling |-------*/
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: `clamp(${s.md}, 2vw, ${s.lg})`,
    },

    /*-------| XL: Extra-large screens with capped scaling |-------*/
    [theme.breakpoints.up("xl")]: {
      fontSize: `clamp(${s.lg}, 1.5vw, ${s.xl})`,
    },
  };
};
