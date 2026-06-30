# Pesquisa de Segurança de Senhas e Autenticação

## Termos Técnicos e Impactos

### 1. Autenticação de Dois Fatores (2FA) / Multifator (MFA)
*   **O que é:** Uma camada extra de segurança que exige dois ou mais métodos de identificação.
*   **Fatores comuns:**
    *   **Conhecimento:** Algo que você sabe (senha, PIN).
    *   **Posse:** Algo que você tem (celular, chave de segurança física).
    *   **Inerência:** Algo que você é (biometria: digital, rosto).
*   **Impacto:** Reduz drasticamente o risco de invasão, pois mesmo que a senha seja roubada, o invasor não terá o segundo fator. É essencial para **contas bancárias** e **e-mails**.

### 2. Criptografia (Encryption)
*   **O que é:** O processo de transformar informações em um código que só pode ser lido por quem tem a "chave".
*   **Impacto:** Em sites e aplicativos, as senhas não devem ser salvas em texto puro, mas sim criptografadas (hashing). Se o banco de dados for vazado, os invasores verão apenas códigos ilegíveis.

### 3. Ataques de Força Bruta (Brute Force)
*   **O que é:** Tentativas automáticas de adivinhar uma senha testando milhares de combinações por segundo.
*   **Impacto:** Senhas curtas e simples (ex: "123456") são quebradas em segundos. Senhas complexas (com símbolos, números e letras) tornam esse ataque inviável.

### 4. SIM Swapping (Sequestro de Chip)
*   **O que é:** Um golpe onde o criminoso transfere o número de telefone da vítima para um chip sob seu controle.
*   **Impacto:** Permite que o invasor receba códigos de recuperação de senha e 2FA via SMS, facilitando o acesso a **contas bancárias** e redes sociais. Por isso, aplicativos autenticadores (como Google Authenticator) são mais seguros que SMS.

### 5. Passkeys (Chaves de Acesso)
*   **O que é:** Uma tecnologia moderna que substitui senhas por chaves digitais vinculadas ao dispositivo (celular/computador) e protegidas por biometria.
*   **Impacto:** Elimina a necessidade de decorar senhas e é imune a ataques de phishing, sendo o futuro da segurança em **sites e aplicativos**.

---
*Este registro serve como base para tornar o nosso gerador de senhas mais robusto e consciente dos riscos reais.*
