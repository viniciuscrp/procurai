/*
    type
    1 - Adoção
    2 - Agendar visita
    3 - Doação
    4 - Voluntariado
 */

interface SelectOption {
    value: number;
    text: String;
}

interface Place extends SelectOption {
    city: number;
    type: number;
    site: string;
    phone: string;
}

export const Places: Place[] = [
    {
        text: 'SOAMA - Sociedade Amigos dos Animais',
        value: 1,
        city: 1,
        type: 1,
        phone: null,
        site: 'https://www.soama.org.br/'
    },
    {
        text: 'Associação Vida',
        value: 2,
        city: 1,
        type: 1,
        phone: null,
        site: 'https://www.instagram.com/associacaovidacxs/'
    },
    {text: 'SOS Animal Proteção e Castração', value: 3, city: 1, type: 1, phone: '(54)3225-5326', site: null},
    {
        text: 'Amor Viralata',
        value: 4,
        city: 1,
        type: 1,
        phone: '(54)99118-0829',
        site: 'https://www.facebook.com/amorviralatacaxias/?fref=ts'
    },
    {
        text: 'APABG - Associação Voluntária de Proteção Animal',
        value: 5,
        city: 2,
        type: 1,
        phone: '(54)9962-1583',
        site: 'https://www.facebook.com/Apabg-Protetora-Dos-Animais-1768546176703228/?fref=ts'
    },
    {
        text: 'UPEVA - União Pela Vida Animal',
        value: 6,
        city: 3,
        type: 1,
        phone: null,
        site: 'https://www.facebook.com/upevaoficial/'
    },
    {
        text: 'Banco de Alimentos',
        value: 7,
        city: 1,
        type: 3,
        phone: '(54)3211-5943 | (54)3901-1183',
        site: 'https://caxias.rs.gov.br/servicos/agricultura/diretoria-de-seguranca-alimentar-e-inclusao-social/banco-de-alimentos'
    },
    {
        text: 'FAS - Fundação de Assistência Social',
        value: 8,
        city: 1,
        type: 3,
        phone: '(54)3220-8700',
        site: 'https://fas.caxias.rs.gov.br/'
    },
    {
        text: 'Sociedade Espírita Bezerra de Menezes',
        value: 9,
        city: 1,
        type: 3,
        phone: '(54)3027-7817',
        site: 'https://www.facebook.com/BezerradeMenezes.SociedadeEspirita/'
    },
    {
        text: 'Centro Espírita Alunos do Bem',
        value: 10,
        city: 1,
        type: 3,
        phone: '(54)3221-5443',
        site: 'https://www.alunosdobem.com.br/'
    },
    {
        text: 'Mão Amiga',
        value: 11,
        city: 1,
        type: 3,
        phone: '(54)3223-5420 | (54)99607-0314\n',
        site: 'https://www.maoamigacaxias.org.br/'
    },
    {text: 'Abracabrike', value: 12, city: 1, type: 3, phone: '(54)3027-6745', site: 'https://www.abracabrike.org.br/'},
    {
        text: 'Lar da Velhice',
        value: 13,
        city: 1,
        type: 2,
        phone: '(54)3225-1677 | (54)98412-5530',
        site: 'https://www.lardavelhicesaofrancisco.com.br/'
    },
    {
        text: 'APADEV - Associação dos Pais e Amigos dos Deficientes Visuais',
        value: 14,
        city: 1,
        type: 3,
        phone: '(54)3213-2323 | (54)99100-9064',
        site: 'https://www.apadev.org.br/'
    },
    {
        text: 'IAPC - Instituto de Ampara às Pessoas com Câncer',
        value: 15,
        city: 1,
        type: 3,
        phone: '(54)3698-9119',
        site: 'https://iapcrs.com.br/'
    },
    {
        text: 'Rosa Del Este',
        value: 16,
        city: 1,
        type: 3,
        phone: '(54)3067-0355',
        site: 'https://arte0505.wixsite.com/rosa-del-este'
    },
    {
        text: 'Pequena Casa da Criança',
        value: 17,
        city: 4,
        type: 4,
        phone: '(51)3076-0500',
        site: 'https://pequenacasa.org.br/'
    },
    {text: 'Abrigo Estrela-Guia', value: 18, city: 1, type: 3, phone: '(54)3021-0708', site: null},
]

export const Cities: SelectOption[] = [
    {text: 'Bento Gonçalves', value: 2},
    {text: 'Caxias do Sul', value: 1},
    {text: 'Flores da Cunha', value: 3},
    {text: 'Porto Alegre', value: 4},
]

export const ServiceTypes: SelectOption[] = [
    {text: 'Adoçao', value: 1},
    {text: 'Agendar Visita', value: 2},
    {text: 'Doação', value: 3},
    {text: 'Voluntariado', value: 4},
]
