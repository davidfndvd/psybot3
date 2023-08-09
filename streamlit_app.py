import openai

# Defina sua chave de API da OpenAI
openai.api_key = "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"

def send_message_to_chat_gpt(message):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Você é um terapeuta virtual que ajuda os pacientes a lidar com problemas emocionais."},
                {"role": "user", "content": message}
            ]
        )

        therapist_response = response.choices[0].message["content"]
        return therapist_response
    except Exception as e:
        print("Erro ao enviar mensagem para a API:", e)
        return "Desculpe, ocorreu um erro ao processar sua mensagem."

# Exemplo de uso
user_input = input("Digite sua mensagem: ")
therapist_response = send_message_to_chat_gpt(user_input)
print("Terapeuta:", therapist_response)
