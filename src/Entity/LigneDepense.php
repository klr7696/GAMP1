<?php

namespace App\Entity;


use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use App\Repository\LigneDepenseRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\NumericFilter;
use Symfony\Component\Validator\Constraints as Assert;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;


/**
 * @ApiResource(
 *collectionOperations={
 *     "get"={
 *     "normalization_context"={"groups"={"comptelier"}},
 *     "path"="/lignes"
 *     }
 * ,"post"={"path"="/lignes"}
 * },
 *     itemOperations={
 *     "get"={

 *     "normalization_context"={"groups"={"infos_ligne"}},
 *     "path"="/lignes/{id}"
 *     }
 *      ,"delete"={"path"="/lignes/{id}"}
 *      ,"patch"={"path"="/lignes/{id}"}
 *      ,"put"={"path"="/lignes/{id}"}
 * },
 *subresourceOperations={
 *     "compte_fils_get_subresource"={"path"="/lignes/{id}/fils"},
 *     "api_livre_comptes_ligne_depenses_get_subresource"={
 *     "normalization_context"={"groups"={"lier_livre"}}
 *     },
 *     "api_ligne_depenses_compte_fils_get_subresource"={
 *     "normalization_context"={"groups"={"ligne_fils"}}
 *     }
 *     }
 *
 *
 * )
 * @UniqueEntity(fields={"numeroLigne","livreCompte"},message="le numero de compte existe")
 * @UniqueEntity(fields={"livreCompte","libelleLigne"},message="le libellé existe dans un compte")
 * @ApiFilter(SearchFilter::class, properties={"hierachieLigne","numeroLigne", "categorieLigne.nomCat"})
 *@ApiFilter(NumericFilter::class, properties={"numeroLigne"})
 * @ApiFilter(OrderFilter::class, properties={"numeroLigne"})
 * @ORM\Entity(repositoryClass=LigneDepenseRepository::class)
 *
 */
class LigneDepense
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     *
     * @Groups({"infos_ligne","lier_livre","ligne_fils"})
     */
    private $id;

    /**
     * @Assert\Type(type="integer", message="salut")
     * @ORM\Column(type="integer")
     * @Groups({"infos_ligne","lier_livre","ligne_fils"})
     * @Assert\NotBlank(message="ce champs doit être fournit")
     * @Assert\Positive(message="le numero ne peut pas être negatif")
     * @Assert\Length(max="4",maxMessage="le numero ne peut exceder 4 chiffres ")
     *
     */
    private $numeroLigne;

    /**
     * @ORM\Column(type="string", length=255)
     *  @Groups({"infos_ligne","lier_livre","ligne_fils"})
     * @Assert\NotBlank(message="ce champs doit être fournit")
     * @Assert\Length(min="5", minMessage="le champs doit depasser 5 caractère ",
     *      max="255",maxMessage="le champs ne peut exceder 255 caractères ")
     */
    private $libelleLigne;

    /**
     * @ORM\Column(type="string", length=100)
     *@Assert\NotBlank(message="ce champs doit être fournit")
     * @Assert\Length(min="5", minMessage="le champs doit depasser 5 caractère ",
     *      max="100",maxMessage="le champs ne peut exceder 100 caractères ")
     * @Groups({"infos_ligne"})
     */
    private $denominationLigne;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"infos_ligne"})
     */
    private $descriptionLigne;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups({"infos_ligne","lier_livre","ligne_fils"})
     * @Assert\Choice(choices={"CHAPITRE","ARTICLE","PARAGRAPHE"}, message="erreur de donnée fournit")
     *
     */
    private $hierachieLigne;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"infos_ligne"})
     */
    private $creationAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"infos_ligne"})
     */
    private $modifAt;

    /**
     * @ORM\Column(type="boolean")
     *
     */
    private $isMouvementer;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isNonSupprimable;

    /**
     * @ORM\ManyToOne(targetEntity=LivreCompte::class, inversedBy="ligneDepenses")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"infos_ligne"})
     */
    private $livreCompte;

    /**
     * @ORM\ManyToOne(targetEntity=CategorieLigne::class, inversedBy="ligneDepenses")
     *  @Groups({"infos_ligne","lier_livre","ligne_fils"})
     *
     */
    private $categorieLigne;

    /**
     * @ORM\ManyToOne(targetEntity=LigneDepense::class, inversedBy="compteFils")
     *
     *
     */
    private $compteParent;

    /**
     * @ORM\OneToMany(targetEntity=LigneDepense::class, mappedBy="compteParent")
     *@ApiSubresource()
     */
    private $compteFils;



    public function __construct()
    {
        $this->compteFils = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumeroLigne(): ?int
    {
        return $this->numeroLigne;
    }

    public function setNumeroLigne(int $numeroLigne): self
    {
        $this->numeroLigne = $numeroLigne;

        return $this;
    }

    public function getLibelleLigne(): ?string
    {
        return $this->libelleLigne;
    }

    public function setLibelleLigne(string $libelleLigne): self
    {
        $this->libelleLigne = $libelleLigne;

        return $this;
    }

    public function getDenominationLigne(): ?string
    {
        return $this->denominationLigne;
    }

    public function setDenominationLigne(string $denominationLigne): self
    {
        $this->denominationLigne = $denominationLigne;

        return $this;
    }

    public function getDescriptionLigne(): ?string
    {
        return $this->descriptionLigne;
    }

    public function setDescriptionLigne(?string $descriptionLigne): self
    {
        $this->descriptionLigne = $descriptionLigne;

        return $this;
    }

    public function getHierachieLigne(): ?string
    {
        return $this->hierachieLigne;
    }

    public function setHierachieLigne(string $hierachieLigne): self
    {
        $this->hierachieLigne = $hierachieLigne;

        return $this;
    }

    public function getCreationAt(): ?\DateTimeImmutable
    {
        return $this->creationAt;
    }

    public function setCreationAt(\DateTimeImmutable $creationAt): self
    {
        $this->creationAt = $creationAt;

        return $this;
    }

    public function getModifAt(): ?\DateTimeInterface
    {
        return $this->modifAt;
    }

    public function setModifAt(?\DateTimeInterface $modifAt): self
    {
        $this->modifAt = $modifAt;

        return $this;
    }

    public function getIsMouvementer(): ?bool
    {
        return $this->isMouvementer;
    }

    public function setIsMouvementer(bool $isMouvementer): self
    {
        $this->isMouvementer = $isMouvementer;

        return $this;
    }

    public function getIsNonSupprimable(): ?bool
    {
        return $this->isNonSupprimable;
    }

    public function setIsNonSupprimable(bool $isNonSupprimable): self
    {
        $this->isNonSupprimable = $isNonSupprimable;

        return $this;
    }

    public function getLivreCompte(): ?LivreCompte
    {
        return $this->livreCompte;
    }

    public function setLivreCompte(?LivreCompte $livreCompte): self
    {
        $this->livreCompte = $livreCompte;

        return $this;
    }

    public function getCategorieLigne(): ?CategorieLigne
    {
        return $this->categorieLigne;
    }

    public function setCategorieLigne(?CategorieLigne $categorieLigne): self
    {
        $this->categorieLigne = $categorieLigne;

        return $this;
    }

    public function getCompteParent(): ?self
    {
        return $this->compteParent;
    }

    public function setCompteParent(?self $compteParent): self
    {
        $this->compteParent = $compteParent;

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getCompteFils(): Collection
    {
        return $this->compteFils;
    }

    public function addCompteFil(self $compteFil): self
    {
        if (!$this->compteFils->contains($compteFil)) {
            $this->compteFils[] = $compteFil;
            $compteFil->setCompteParent($this);
        }

        return $this;
    }

    public function removeCompteFil(self $compteFil): self
    {
        if ($this->compteFils->contains($compteFil)) {
            $this->compteFils->removeElement($compteFil);
            // set the owning side to null (unless already changed)
            if ($compteFil->getCompteParent() === $this) {
                $compteFil->setCompteParent(null);
            }
        }

        return $this;
    }

    /**
     * @return int|null
     *  @Groups({"lier_livre","ligne_fils"})
     */

    public function getArticleNombre():?int
    {
        return array_reduce($this->getCompteFils()->toArray(), function ($nombre)
        {return $nombre +1;
        },0);
    }

}
