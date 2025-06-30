import { invoice } from "@telegram-apps/sdk"; //init

// init();

export const extractInvoiceId = (link: string): string | null => {
  try {
    if (link.includes('$')) {
      return link.split('$')[1];
    }
    
    const url = new URL(link);
    return url.pathname.split('/').pop() || null;
  } catch {
    return null;
  }
};

export const handlePayment1 = async (price: number) => {
  try {
    console.log("Отправка запроса для суммы:", price);
    const response = await fetch("https://backend_url/donate", { // your https://backend_url/donate
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ price })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Ответ сервера:", data);

    if (!data.invoice_link) {
      throw new Error("Ссылка на оплату не получена");
    }

    const invoiceId = extractInvoiceId(data.invoice_link);
    
    if (!invoiceId) {
      throw new Error("Не удалось извлечь ID инвойса");
    }

    console.log("Открываем инвойс с ID:", invoiceId);
    await invoice.open(invoiceId);

    return true; // Успешная оплата
  } catch (error) {
    console.error("Ошибка при обработке платежа:", error);
    throw error; // Пробрасываем ошибку дальше
  }
};





// const transaction = {
//     validUntil: Math.floor(Date.now() / 1000) + 300,
//     messages: [{
//         address: "EQD...получатель...",
//         amount: "1000000000", // 1 TON
//     }]
// };
// const result = await connector.sendTransaction(transaction);
// console.log("TX Hash:", result.boc); // Сохраняем хеш транзакции