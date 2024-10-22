export const calculateCarbon = (electricity, transportation, waste, factors) => {
  const electricityEmission = electricity * factors.electricityFactor;
  const transportationEmission = transportation * factors.transportationFactor;
  const wasteEmission = waste * factors.wasteFactor;

  const total = electricityEmission + transportationEmission + wasteEmission;

  return {
    total,
    breakdown: [
      { name: 'Listrik', value: electricityEmission },
      { name: 'Transportasi', value: transportationEmission },
      { name: 'Limbah', value: wasteEmission },
    ],
  };
};

export const getExplanation = (result) => {
  const highestCategory = result.breakdown.reduce((prev, current) => 
    (prev.value > current.value) ? prev : current
  );

  const explanations = {
    Listrik: {
      impact: "Penggunaan listrik yang tinggi berkontribusi signifikan terhadap emisi karbon. Ini berasal dari pembangkit listrik yang menggunakan bahan bakar fosil.",
      suggestions: [
        "Ganti lampu dengan LED hemat energi",
        "Matikan peralatan elektronik saat tidak digunakan",
        "Pertimbangkan untuk beralih ke sumber energi terbarukan seperti panel surya",
      ],
    },
    Transportasi: {
      impact: "Emisi dari transportasi berasal dari pembakaran bahan bakar fosil, yang melepaskan CO2 ke atmosfer dan berkontribusi pada pemanasan global.",
      suggestions: [
        "Gunakan transportasi umum atau berbagi kendaraan",
        "Pertimbangkan bersepeda atau berjalan kaki untuk jarak dekat",
        "Jika memungkinkan, beralih ke kendaraan listrik atau hybrid",
      ],
    },
    Limbah: {
      impact: "Limbah yang tidak dikelola dengan baik menghasilkan metana, gas rumah kaca yang lebih kuat daripada CO2, saat terurai di tempat pembuangan sampah.",
      suggestions: [
        "Praktikkan 3R: Reduce, Reuse, Recycle",
        "Kompos limbah organik",
        "Pilih produk dengan kemasan minimal atau dapat didaur ulang",
      ],
    },
  };

  return {
    highestCategory: highestCategory.name,
    generalExplanation: `Jejak karbon Anda sebesar ${result.total.toFixed(2)} ton CO2e/bulan menunjukkan dampak signifikan terhadap lingkungan. Kategori ${highestCategory.name} memberikan kontribusi terbesar.`,
    categoryExplanation: explanations[highestCategory.name],
  };
};