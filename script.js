// Função para enviar mensagem e receber resposta da API
async function sendMessageToChatGPT(message) {
  const apiKey = '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'; // Substitua pelo seu próprio chave de API
  const endpoint = 'https://api.openai.com/v1/chat/completions';

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };

  const body = JSON.stringify({
    messages: [{ role: 'user', content: message }],
    max_tokens: 50
  });

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: body
    });

    const responseData = await response.json();
    const therapistResponse = responseData.choices[0].message.content;
    return therapistResponse;
  } catch (error) {
    console.error('Erro ao enviar mensagem para a API:', error);
    return 'Desculpe, ocorreu um erro ao processar sua mensagem.';
  }
}

// Event listener para o envio de mensagem
sendButton.addEventListener('click', async () => {
  const userMessage = userInput.value;
  addMessage('Você', userMessage, 'user');
  userInput.value = '';

  const therapistResponse = await sendMessageToChatGPT(userMessage);
  addMessage('Terapeuta', therapistResponse, 'therapist');
});
