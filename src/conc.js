let sharedResource = 0;

async function updateResource() {
    console.log('Trying to update the resource...');

    for (let i = 0; i < 5; i++) {
        const currentValue = sharedResource; // 獲取當前值
        console.log(`Reads sharedResource = ${currentValue}`);

        // 模擬延遲
        await new Promise((resolve) => setTimeout(resolve, 100));

        sharedResource = currentValue + 1; // 更新資源
        console.log(`Updates sharedResource to ${sharedResource}`);
    }
}

// 測試函數
async function test() {
    await Promise.all([updateResource(), updateResource()]); // 同時執行兩個更新
    console.log('All tasks completed.');
    console.log(`Final value of sharedResource: ${sharedResource}`);
}

test();