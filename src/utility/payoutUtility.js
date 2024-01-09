export function convertToCSV(data) {
    const header = Object.keys(data[0]).join(',');
    const csvRows = data.map(row => Object.values(row).join(','));
  
    const csvContent = `${header}\n${csvRows.join('\n')}`;
    const blob = new Blob([csvContent], { type: 'text/csv' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'orderData.csv';
    link.click();
  }

  